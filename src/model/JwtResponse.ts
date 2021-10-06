export class JwtResponse {
    public token: string;

    public constructor(token :string){
      this.token= token;
    }
}