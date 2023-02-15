import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Airtable from 'airtable'

export const useDataStore = defineStore('data', () => {
  const me = ref([])
  const ideas = ref([])
  const skills = ref([])
  const hobbies = ref([])
  const favorites = ref([])


  function fetchData() {
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: ''
    });
    var base = Airtable.base('apppKTXWhW0Iz53Aa');


    // TODO - loop through bases and populate refs

    base('Me').select({
        fields: [
            "fldPkKdxz0fCNJuHO",
            "fldYoL7qgu7Ojzbes",
            "fldVengQwmb0bB6Rs"
        ],
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            let clone = structuredClone(record.fields)
            me.value.push(clone)
        });

        console.log('me?')
        console.log(me)
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

  }

  return { 
    me,
    ideas,
    skills,
    hobbies,
    favorites,
    fetchData,
 }
})
