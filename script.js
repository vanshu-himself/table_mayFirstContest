// "jai shree Ram";
const bt = document.querySelector('.button');
bt.addEventListener("click",callApi);


function callApi(){
    Promise.resolve()
    .then(()=>callFetchApiData("https://dummyjson.com/posts",1000,"posts"))
    .then(resolve=>{
        if (resolve){
            return callFetchApiData("https://dummyjson.com/products",2000,"products");
        }
    }).then(resolve=>{
        if (resolve){
            return callFetchApiData("https://dummyjson.com/todos",3000,"todos");
        }
    }).catch(err=>console.error(err));
}



function callFetchApiData(ApiURL,timeDelay,type="posts"){
    
    return new Promise(resolve=>{
        setTimeout(()=>{
            fetch(ApiURL)
            .then(responseHere=>responseHere.json())
            .then(HereData=>{
                const tablePosts = document.getElementById("table-posts");
                const tableProducts = document.getElementById("table-projects");
                const tableTodos = document.getElementById("table-todos");

                const tablePostsTbody = document.getElementById("table-posts-tbody");
                const tableProjTbody = document.getElementById("table-projects-tbody");
                const tableTodosTbody = document.getElementById("table-todos-tbody");

                console.log(type)
                if (type=="posts"){
                    console.log(HereData);
                    tablePosts.style.display="block";
                    HereData.posts.forEach(element => {
                        
                        const postsData=`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.title}</td>
                            <td>${element.body}</td>
                            <td>${element.tags[0]}</td>
                            <td>${element.tags[1]}</td>
                            <td>${element.tags[2]}</td>
                                                      
                        </tr>`;
                        tablePostsTbody.innerHTML+=postsData;
                    });


                }
                else if (type=="products"){
                    console.log(HereData);
                    tableProducts.style.display="block";
                    HereData.products.forEach(element=>{

                        const ProjectData=`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.title}</td>
                            <td>${element.description}</td>
                            <td>${element.price}</td>
                            <td>${element.discountPercentage}</td>
                            <td>${element.rating}</td>
                            <td>${element.stock}</td>
                            <td>${element.brand}</td>
                            <td>${element.category}</td>
                            <td>${element.thumbnail}</td>
                            <td>${element.images[0]}</td>
                            <td>${element.images[1]}</td>
                            <td>${element.images[2]}</td>
                            <td>${element.images[3]}</td>
                            <td>${element.images[4]}</td>
                            
                            
                        </tr>`;
                        tableProjTbody.innerHTML+=ProjectData;
                    });

                }
                else if (type=="todos"){
                    console.log(HereData);
                    tableTodos.style.display="block";
                    HereData.todos.forEach(element=>{

                        const todosData=`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.todo}</td>
                            <td>${element.todo}</td>
                            <td>${element.completed}</td>
                            <td>${element.userId}</td>
                        </tr>`;
                        tableTodosTbody.innerHTML+=todosData;
                    });
                }


                resolve(true);
            })
            
        },timeDelay);
    });
}





