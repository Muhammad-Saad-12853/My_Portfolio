export class tag{
    static readonly ANGULAR= new tag("Angular", "red")
    static readonly REACT= new tag("React", "purple")
    static readonly TYPESCRIPT= new tag("TypeScript", "green")
    static readonly JAVASCIPT= new tag("Javascript", "brown")
    static readonly CPLUSPLUS= new tag("C++", "blue")
    static readonly SQL= new tag("SQL", "orange")
    static readonly JAVA= new tag("Java", "black")
    static readonly HTML= new tag("HTML", "yellow")
    static readonly CSS= new tag("CSS", "gray")
    private constructor(private readonly key:string, public readonly color:string){

    }
    toString(){
        return this.key
    }
}