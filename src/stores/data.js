import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Airtable from 'airtable'

export const useDataStore = defineStore('data', () => {
  const me = ref([])
  const ideas = ref([])
  const skills = ref([])
  const struggles = ref([])
  const hobbies = ref([])
  const favorites = ref([])
  const values = ref([])
  const links = ref([])


  function fetchData() {
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'patABipTJq5Dtw7VN.495cfb0a6a01fdbab9361a6b3d29a948f1897ffd8dd174937b1a1e74e6305f30'
    });
    const base = Airtable.base('apppKTXWhW0Iz53Aa');
    const tables = [
        {
            id: 'tbljWDfWHAqM0DGzw', 
            ref: me,
        },
        {
            id: 'tblw8g9YzvKv7jpBz', 
            ref: ideas,
            options: {
                sort: [{field: 'status', direction: 'desc'}]
            }
        },
        {
            id: 'tblaHh7IXY7tg9r6O', 
            ref: skills,
        },
        {
            id: 'tblCsPe37vrdRNvui', 
            ref: struggles,
        },
        {
            id: 'tblpa47FpvOFuMcqJ', 
            ref: hobbies,
        },
        {
            id: 'tblTkEQZ0HW9lmEwH', 
            ref: favorites,
        },
        {
            id: 'tbla4jGKtqRHJyJ2v', 
            ref: values,
        },
    ]

    tables.forEach(table => {
        let options = table.options ? table.options : {};
        console.log(options)
        base(table.id).select(options).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                let clone = structuredClone(record.fields)
                table.ref.value.push(clone)
            });
    

            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    })
  }

  function fetchLinks() {
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'patABipTJq5Dtw7VN.495cfb0a6a01fdbab9361a6b3d29a948f1897ffd8dd174937b1a1e74e6305f30'
    });
    const base = Airtable.base('apppKTXWhW0Iz53Aa');
    const tables = [
        {
            id: 'tblWRnzwicuIxaG1S', 
            ref: links,
        },
    ]

    tables.forEach(table => {
        let options = table.options ? table.options : {};
        base(table.id).select(options).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                let clone = structuredClone(record.fields)
                if (clone.display) table.ref.value.push(clone)
            });
    

            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    })
    console.log('=== = =links.value')
    console.log(links.value)
  }

  return { 
    me,
    ideas,
    skills,
    struggles,
    hobbies,
    favorites,
    values,
    links,
    fetchData,
    fetchLinks,
 }
})
