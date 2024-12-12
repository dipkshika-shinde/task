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
         priority:'low'
    }
    
]

var xyz=arr.splice(0,0,[
    {
        id:3,
        description:'complete task',
        priority:'medium'
    },

])

console.log(arr);


