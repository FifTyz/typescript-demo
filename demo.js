const students = [
    {name:"John", age: 18, score: 85, grade: "B"},
    {name:"Mary", age: 17, score: 92, grade: "A"},
    {name:"Alex", age: 19, score: 78, grade: "C"},
    {name:"Sophia", age: 17, score: 88, grade: "B"},
    {name:"David", age: 18, score: 95, grade: "A"},
    {name:"Michael", age: 20, score: 60, grade: "D"},
]
function old()
{
    let old = students[0];
    let young = students[0];
    students.map((result)=>{
        if(result.age > old.age)
        {
            old = result;
        }
        if(result.age < young.age)
        {
            young = result;
        }
})
console.log("old : name = " + old.name + " age = " + old.age);
console.log("young : name = " + young.name + " age = " + young.age);
}
// old();

function checkGrade(score)
{
    if(score < 50)
        {
            console.log("F");
        }else if(score <= 60)
        {
            console.log("D");
        }else if(score <= 80)
        {
            console.log("C");
        }else if(score <= 90)
            {
            console.log("B");
        }else if(score >=90)
        {
            console.log("A");
        }        
}
checkGrade(students[5].score)