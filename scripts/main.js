var app = new Vue({
    el: '#app',
    data: {
        exercice: data.exercices,
        view: "main",
        routine:[],
        movements: [],
        filters: [],     

    },

    methods: {
        filter: function(name){
           if (!this.filters.includes(name)){
                this.filters.push(name);
           }
           else{
            for( var i = 0; i < this.filters.length; i++){ 
                if ( this.filters[i] === name) {
                  this.filters.splice(i, 1); 
                }
           }
        }
        },

        changeView: function(info){
            this.view = info;
        },

        checkFilter: function(mov){
            if(this.filters.length == 0 || this.filters.length == this.movements.length){
                return false;
            }else{
                for (var x = 0; x < this.filters.length; x++){
                    if(this.filters[x] == mov){
                        return false;
                    }else{
                        return true;
                    }
                }
            }
              
        },
   
        createRoutine: function(lvl){
            this.routine = [];
            var rnd1 = 0, rnd2 = 0, rnd3 = 0, rnd4 = 0, rnd5 = 0;

            if(lvl == 1){
                while (data.exercices[rnd1].level != 1 || this.checkFilter(data.exercices[rnd1].movement)){
                    rnd1 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd2].level != 1 || this.checkFilter(data.exercices[rnd2].movement)){
                    rnd2 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd3].level != 1 || this.checkFilter(data.exercices[rnd3].movement)){
                    rnd3 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd4].level != 1 || this.checkFilter(data.exercices[rnd4].movement)){
                    rnd4 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd5].level != 1 || this.checkFilter(data.exercices[rnd5].movement)){
                    rnd5 = Math.floor((Math.random() * 510));
                }
               this.routine.push(data.exercices[rnd1]);
               this.routine.push(data.exercices[rnd2]);
               this.routine.push(data.exercices[rnd3]);
               this.routine.push(data.exercices[rnd4]);
               this.routine.push(data.exercices[rnd5]);                
            }
            if (lvl == 3){
                while (data.exercices[rnd1].level < 2 || data.exercices[rnd1].level > 4 || this.checkFilter(data.exercices[rnd1].movement)){
                    rnd1 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd2].level < 2 || data.exercices[rnd2].level > 4 || this.checkFilter(data.exercices[rnd2].movement)){
                    rnd2 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd3].level < 2 || data.exercices[rnd3].level > 4 || this.checkFilter(data.exercices[rnd3].movement)){
                    rnd3 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd4].level < 2 || data.exercices[rnd4].level > 4 || this.checkFilter(data.exercices[rnd4].movement)){
                    rnd4 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd5].level < 2 || data.exercices[rnd5].level > 4 || this.checkFilter(data.exercices[rnd5].movement)){
                    rnd5 = Math.floor((Math.random() * 510));
                }
               this.routine.push(data.exercices[rnd1]);
               this.routine.push(data.exercices[rnd2]);
               this.routine.push(data.exercices[rnd3]);
               this.routine.push(data.exercices[rnd4]);
               this.routine.push(data.exercices[rnd5]); 
            }

            if (lvl == 6){
                while (data.exercices[rnd1].level < 5 || this.checkFilter(data.exercices[rnd1].movement)){
                    rnd1 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd2].level < 5 || this.checkFilter(data.exercices[rnd2].movement)){
                    rnd2 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd3].level < 5 || this.checkFilter(data.exercices[rnd3].movement)){
                    rnd3 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd4].level < 5 || this.checkFilter(data.exercices[rnd4].movement)){
                    rnd4 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd5].level < 5 || this.checkFilter(data.exercices[rnd5].movement)){
                    rnd5 = Math.floor((Math.random() * 510));
                }
               this.routine.push(data.exercices[rnd1]);
               this.routine.push(data.exercices[rnd2]);
               this.routine.push(data.exercices[rnd3]);
               this.routine.push(data.exercices[rnd4]);
               this.routine.push(data.exercices[rnd5]); 
            }

        
        
        },



    },
    created: function(){
        for(x = 0; x < data.exercices.length; x++){
            if(!this.movements.includes(data.exercices[x].movement)){
                this.movements.push(data.exercices[x].movement);
            }
        }
    }
  })