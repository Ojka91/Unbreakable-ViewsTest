var app = new Vue({
    el: '#app',
    data: {
        exercice: data.exercices,
        view: "main",
        routine:[],

    },

    methods: {
        changeView: function(info){
            this.view = info;
        },

        createRoutine: function(lvl){
            this.routine = [];
            var rnd1 = 0;
            var rnd2 = 0;
            var rnd3 = 0;
            var rnd4 = 0;
            var rnd5 = 0;
            if(lvl == 1){
                while (data.exercices[rnd1].level != 1){
                    rnd1 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd2].level != 1){
                    rnd2 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd3].level != 1){
                    rnd3 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd4].level != 1){
                    rnd4 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd5].level != 1){
                    rnd5 = Math.floor((Math.random() * 510));
                }
               this.routine.push(data.exercices[rnd1]);
               this.routine.push(data.exercices[rnd2]);
               this.routine.push(data.exercices[rnd3]);
               this.routine.push(data.exercices[rnd4]);
               this.routine.push(data.exercices[rnd5]);                
            }
            if (lvl == 3){
                while (data.exercices[rnd1].level < 2 || data.exercices[rnd1].level > 4){
                    rnd1 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd2].level < 2 || data.exercices[rnd2].level > 4){
                    rnd2 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd3].level < 2 || data.exercices[rnd3].level > 4){
                    rnd3 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd4].level < 2 || data.exercices[rnd4].level > 4){
                    rnd4 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd5].level < 2 || data.exercices[rnd5].level > 4){
                    rnd5 = Math.floor((Math.random() * 510));
                }
               this.routine.push(data.exercices[rnd1]);
               this.routine.push(data.exercices[rnd2]);
               this.routine.push(data.exercices[rnd3]);
               this.routine.push(data.exercices[rnd4]);
               this.routine.push(data.exercices[rnd5]); 
            }

            if (lvl == 6){
                while (data.exercices[rnd1].level < 5){
                    rnd1 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd2].level < 5){
                    rnd2 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd3].level < 5){
                    rnd3 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd4].level < 5){
                    rnd4 = Math.floor((Math.random() * 510));
                }
                while (data.exercices[rnd5].level < 5){
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
     
    }
  })