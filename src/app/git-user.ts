export class GitUser {
    constructor(
        public avatar_url:string,
        public followers:number,
        public following:number,
        public login:string,
        public public_repos:number,
        public location:string,
        public email:string,
        public searchItem:string,
        public bio:string,
        public created_at:number,
        public html_url:any
    ){}
}
