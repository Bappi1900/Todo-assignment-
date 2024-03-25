class Todos 
{
    
    #tasks = [];          
    #backend_url = '';    

   
    constructor(url) 
    {    
        this.#backend_url = url;   
    }


   
    getTasks =  () =>
    {    
        
        return new Promise((resolve, reject) => 
        {
                                       
            fetch(this.#backend_url)

                 
                                                         
            .then((response) =>         
            
                response.json()   //                       
            ) 

                                                             
            .then((json) =>             
            {
                
                this.#readJson(json); 
                resolve(this.#tasks); 

            })
            
            .catch((error) => 
            {
                
                reject(error);
            });
        })
    }

   
    #readJson = (tasksAsJson) => 
    {
        
        tasksAsJson.forEach(currentElement => 
        {
          
            const task1 = new Task(currentElement.id, currentElement.description);
            
            this.#tasks.push(task1);    
        });
    }
}