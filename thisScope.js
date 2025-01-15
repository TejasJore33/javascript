const student = {
    name : "Tejas Jore",
    marks : 95,
    prop : this, // global Scope
    getname : function (){
        console.log(this);
        return this.name;
    },

    getMarks:()=>{
        console.log(this);// parent's scope ->window
        return this.marks;
    }
}