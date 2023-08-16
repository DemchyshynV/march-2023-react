// const func = (arr: number[]):void => {
//     for (let number of arr) {
//         console.log(number);
//     }
// }
//
// func([1,2,3,4])
//

// interface IId{
//     id: number
// }
// interface IUser extends IId{
//
//     name: string,
//     age: number
// }

// interface IUser{
//
//     id: number
//     name: string,
//     age?: number
// }
// interface IUser<T> {
//     id: number
//     name: string,
//     age: number
//     data:T
// }
// interface IUser {
//     id: number
//     name: string
//     age: number
// }
//
//
// //
// // const user1: IUser<number> = {id: 1, name: 'Max', age: 5, data:5, asd:{}}
// const user2: Partial<IUser> = {age:5}
//


// class User {
//
//     constructor(private id: number, private name: string, private age: number) {
//     }
//
//     getUserName():string{
//         return this.name
//     }
// }
//
// const user = new User(1, 'Max', 5);
// console.log(user.getUserName());
//


// interface IShape {
//     area: () => number,
//     perimeter: () => number
// }
//
// interface IGreeting {
//     print: () => void
// }
//
// class Rectangle implements IShape, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
//
//     perimeter(): number {
//         return (this.a + this.b) * 2;
//     }
//
//     print(): void {
//         console.log('Hello');
//     }
//
// }
//
// class Triangle{
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c
//     }
//
// }
//
//
// const shapes: IShape[] = [
//     new Rectangle(1, 2),
//     new Triangle(1,3,4),
//     new Rectangle(3, 4)
// ]
// //
// // for (let shape of shapes) {
// //     console.log(shape.area());
// //     console.log(shape.perimeter());
// // }
//
// const rectangle = new Rectangle(2,3);
//
// rectangle.print()

// type MyNumber = number|string
//
// const a:MyNumber = 'ssss'


// const asd=():number=>{
//     return 555
// }
//
//
// type AsdType = ReturnType<typeof asd>
//
//
// const ss:AsdType = 11


// import {IUser} from './interfaces/user.interface';
// import {userService} from "./services/user.service";
//
// userService.getAll().then(({data:users}) =>{
//     for (let user of users) {
//         console.log(user.name);
//     }
// })

import {userService} from "./services/user.service";

userService.getById(1).then(({data})=> {
    console.log(data.name, data.id);
})
// enum DayOfWeek {
//     MON='MON',
//     TUE='TUE',
//     WED='WED'
// }
