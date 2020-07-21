class details_of_user{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} is logged in`);
    }
    logout(){
        console.log(`${this.name} is logged out`);
    }
}


class Moderator extends details_of_user{
     constructor(name,age,email){
     super(name,age,email);
     this.coins=0;

     }
    addcoins(){
        this.coins+=1;
        console.log(`${this.name} contains ${this.coins} coins`);
    }
    removecoins(){
        this.coins--;
        console.log(`${this.name} contains ${this.coins} coins`);
    }
}

class admin extends Moderator{
    addcourse(details_of_user,course){
        details_of_user.courses.push(course);
    }
    removecourse(details_of_user,course){
        details_of_user.courses.pop(course);
    }
}

let user1=new details_of_user('suppi',20,'suppi@email.com');
let user2=new details_of_user('meena',20,'m@email.com');
let user3=new details_of_user('sangi',20,'s@email.com');
let user4=new details_of_user('pani',20,'p@email.com');
let mod=new Moderator('Ravi',22,'ravi@gmail.com');
let users=[user1,user2,user3,user4]
let adm=new admin();

adm.addcourse(user1,'Javascript');
adm.addcourse(user1,'Python');
adm.removecourse(user1,'python');

mod.addcoins();
mod.removecoins();
mod.addcoins();

var i;
users.forEach(i=>{
    console.log(i);
});
