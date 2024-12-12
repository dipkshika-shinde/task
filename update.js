var arr=[
    {
        id:1,
        description:'complete project',
        priority:'low'
    }, {
        id:2,
        description:'Incomplete project',
        priority:'high'
    },

    {
        id:3,
        description:'Incomplete task',
         priority:'low'
    },
    {
        id:4,
        description:'upload image',
         priority:'high'
    }
    
]

var task=arr.splice(3,1, {
    id:4,
    description:'upload image',
     priority:'low'
}
);
console.log("the task after the update..");
console.log(task);