// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(a =>a.json())
//         .then(b =>console.log(b))

// a = await fetch('https://jsonplaceholder.typicode.com/users')


// let abc = {
//     users : []
// }

abc = await fetch('https://jsonplaceholder.typicode.com/users')

const func1 = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const ujson = await users.json();
    console.log(ujson);

    return ujson;

}


////////////////////////////////////////////////////////////////////

// How to extract data out of a Promise

let user = {
  name: "John",
  age: 30
};


let data;
const result1 = await new Promise((resolve) => setTimeout(() => resolve(user))).then(result => {console.log(result); data=result;})

// {name: 'John', age: 30}
///////////////////////////////////////////////////////////////////////////////////////////////////

Bind for setTimeout correctly

let obj = {
  myArray : ['zero', 'one', 'two'],
  method : function(prop) {
    console.log(arguments.length > 0 ? this[prop] : this);
  },
}
let myBoundMethod = obj.method.bind(obj.myArray);

setTimeout( () => {
    myBoundMethod()}
    ,.1*1000);
///////////////////////////////////////////////////////////////////////////////////////////////////

WORKING RESOLVE PROMISE 

    async function resolveAfter1Second() {
        console.log("starting fast promise")
        return new Promise(resolve => {
            setTimeout(function () {
                resolve("fast")
                console.log("fast promise is done")
            }, 1000)
        })
    }
    let res;
    resolveAfter1Second().then(data => {
        console.log(data + " in .then")
        res = data;
    })

 ///////////////////////////////////////////////////////////////////////////////////////////////////

// instead of    const results = [await p1, await p2]
// INSTEAD TRY Promise.allSettled() 🦷

  async function foo() {
     const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
     const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
     const promises = [ p1,  p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
    let results= await  Promise.allSettled(promises)
      return results;

  }

  let res = await foo().catch(() => {}) // Attempt to swallow all errors...


////////////////////////////////////////////////////////////////////

// WORKING ASYNC AWAIT FETCH

const gitQuery = async () => {
   let githubResponse = await fetch(`https://api.github.com/users/opulentpastanotorious`);
    let githubUser = await githubResponse.json();
    return githubUser;
}

let ret;

gitQuery().then(result=>{ret = result},
    error=>{ret = error})


    {
        "login": "opulentpastanotorious",
        "id": 101950027,
        "node_id": "U_kgDOBhOiSw",
        "avatar_url": "https://avatars.githubusercontent.com/u/101950027?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/opulentpastanotorious",
        "html_url": "https://github.com/opulentpastanotorious",
        "followers_url": "https://api.github.com/users/opulentpastanotorious/followers",
        "following_url": "https://api.github.com/users/opulentpastanotorious/following{/other_user}",
        "gists_url": "https://api.github.com/users/opulentpastanotorious/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/opulentpastanotorious/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/opulentpastanotorious/subscriptions",
        "organizations_url": "https://api.github.com/users/opulentpastanotorious/orgs",
        "repos_url": "https://api.github.com/users/opulentpastanotorious/repos",
        "events_url": "https://api.github.com/users/opulentpastanotorious/events{/privacy}",
        "received_events_url": "https://api.github.com/users/opulentpastanotorious/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 4,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2022-03-19T20:20:31Z",
        "updated_at": "2022-05-20T17:15:00Z"
    }


////////////////////////////////////////////////////////////////////

async function gitQueryFunc() {
   let githubResponse = await fetch(`https://api.github.com/users/opulentpastanotorious`);
    let githubUser = await githubResponse.json();
    return Promise.resolve(githubUser);

}

gitQueryFunc().then(alert);



////////////////////////////////////////////////////////////////////

// Here’s an example with a promise that resolves in 5 second:

async function gitFunc() {

    setTimeout(() => console.log("gitFunc"),5000);

}
gitFunc();

////////////////////////////////////////////////////////////////////

// async func returns resolved promise

async function gitFunc2(){
    let p = new Promise((resolve,reject) => {
        setTimeout(() => resolve("done",1000));
    });

    let ret = await p;
    alert(ret);

}

gitFunc2();


////////////////////////////////////////////////////////////////////

const fun = async () => {
    let P = new Promise((res,rej) => {
        setTimeout(() => res("resolved"),1000)
    })
    let b = await P;

    return b;
}

let res = await fun();


////////////////////////////////////////////////////////////////////


const fun = async () => {
    return Promise.resolve("done");
}
let res = await fun();
console.log(res);

////////////////////////////////////////////////////////////////////


let avatar_url = "https://avatars.githubusercontent.com/u/101950027?v=4"

let img = document.createElement('img');
img.src = avatar_url;
img.className = "promise-avatar-example";
document.body.append(img);

// avatar_url = "avatar_url": "https://avatars.githubusercontent.com/u/101950027?v=4"

////////////////////////////////////////////////////////////////////
const imgAsync = async () => {

  let avatar_url = "https://avatars.githubusercontent.com/u/101950027?v=4"

  let img = document.createElement('img');
  img.src = avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  setTimeout( ()=> {
    img.remove();
    console.log("removed img");
  } , 20000)
}

imgAsync();

////////////////////////////////////////////////////////////////////

const asyncFunc2 = async () => {

    let avatar_url = "https://avatars.githubusercontent.com/u/101950027?v=4"

    let img = document.createElement('img');
    img.src = avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    let b  = await Promise.resolve(setTimeout(() => {
  console.log("Delayed for 5 second.");
}, 5000));
    console.log(b);

}
asyncFunc2();


////////////////////////////////////////////////////////////////////


let user = {
  name: "John",
  age: 30
};
user.func = function() {
  setTimeout(() => {console.log(name)}, 3000); // user is not in context, thus name is undefined upon execution

}

////////////////////////////////////////////////////////////////////

let user = {
  name: "John",
  age: 30
};
user.func = function() {
  setTimeout(() => {console.log(window.chrome)}, 3000); // if not set default context, it will be window OR global obj
}

////////////////////////////////////////////////////////////////////

class Season  {
  static winter = new Season("winter")
  static summer = new Season("summer")
  static spring = new Season("spring")
  static fall = new Season("fall")

  constructor(name) {
    this.name = name
  }
}

let obj1 = {
  season : new Season("fall"), // uses prexisting obj
  season2 : Season.fall
}

console.log(obj1.season ==Season.fall )// false
console.log(obj1.season ===Season.fall )// false
console.log(obj1.season2 ==Season.fall )// true
console.log(obj1.season2 ===Season.fall )// true

let obj2 = {

}

Object.keys(Season).forEach((item, i) => {
  console.log("item: ", item )
  console.log("i: ", i )

});

// item:  winter
// VM14865:3 i:  0
// VM14865:2 item:  summer
// VM14865:3 i:  1
// VM14865:2 item:  spring
// VM14865:3 i:  2
// VM14865:2 item:  fall
// VM14865:3 i:  3



Object.keys(obj1).forEach((item, i) => {
  console.log("item: ", item )
  console.log("i: ", i )

});
//
// item:  season
// VM14946:3 i:  0
// VM14946:2 item:  season2
// VM14946:3 i:  1

////////////////////////////////////////////////////////////////////

// EXAMPLE : BINDING OBJECT context

const myArray = ['zero', 'one', 'two'];
const myBoundMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}).bind(myArray);

////////////////////////////////////////////////////////////////////

let user = {
  name: "John",
  age: 30
};
user.func = function() {
  setTimeout(() => {console.log(user.name)}, 1000); // if not set default context, it will be window
}
user.func.bind(user);

////////////////////////////////////////////////////////////////////


WHY DONT THESE WORK ???

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const addObj = addArguments.bind(2,1);


***************************************************************

const myArray = ['zero', 'one', 'two'];
myArray.method = function(prop) {
  console.log(arguments.length > 0 ? myArray[prop] : myArray);
}
setTimeout(myArray.method,1,'one');
//

const obj = {
  myArray : ['zero', 'one', 'two'],
  method : function(prop) {
    console.log(arguments.length > 0 ? this[prop] : this);
  },
  // myBoundMethod:method.bind(myArray)
}
const myMethod = obj.method;
const myBoundMethod= myMethod.bind(obj);

//
// const myArray = ['zero', 'one', 'two'];
// myArray.method = function(prop) {
//   console.log(arguments.length > 0 ? myArray[prop] : myArray);
// }

setTimeout( () => {
  obj.method('one')}
  ,.1*1000);

  setTimeout( () => {
    myBoundMethod()}
    ,.1*1000);

  ////////////////////////////////////////////////////////////////////

  let user = {
    name: "John",
    age: 30
  };

let a = new Promise(resolve=> {
  setTimeout( () => {
    resolve(user)
  },.5*1000)

})

let asF = async () => {
  let a = await setTimeout( () => {
      return (user)
    },.5*1000)
  console.log(a)
}

let b = await a.then(result => result.data);



function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

const result1 = await new Promise((resolve) => setTimeout(() => resolve(user))).then(result => result.data)

async function foo() {
   const result1 = await new Promise(
     (resolve) => setTimeout(
       () => resolve('user')
     )
     )
   const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
   return {result1,result2};
}
let res = await foo();


///////////////////////////////////////////////////////////////////////////////////////////////////
The first line of the body of function foo is executed synchronously, with the await expression configured with the pending promise. Progress through foo
 is then suspended and control is yielded back to the function that called foo.
Some time later, when the first promise has either been fulfilled or rejected, control moves back into foo.
 The result of the first
 promise fulfillment (if it was not rejected) is returned from the await expression.
 Here 1 is assigned to result1. Progress continues, and the second await expression is evaluated. Again, progress through foo is
 suspended and control is yielded.
Some time later, when the second promise has either been fulfilled or rejected, control re-enters foo. The result of the second promise resolution is
 returned from the second await expression. Here 2 is assigned to result2. Control moves to the return expression (if any).
 The default return value of undefined is returned as the
 resolution value of the current promise.

 async function foo() {
    const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
    const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
    const results = [await p1, await p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
    return results;
 }
 let res = await foo().catch(() => {}) // Attempt to swallow all errors...

 ///////////////////////////////////////////////////////////////////////////////////////////////////

// INSTEAD TRY Promise.allSettled() 🦷

  async function foo() {
     const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
     const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
     const promises = [ p1,  p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
    let results= await  Promise.allSettled(promises)
      return results;

  }

  let res = await foo().catch(() => {}) // Attempt to swallow all errors...
