import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Mock user data for now
  private readonly users = [
    { id: 1, username: 'test', password: 'password' },
  ];
// This method is used to register a new user
async register(username: string, password: string): Promise<any> {
    const userExists = this.users.some((user) => user.username === username);
    if (userExists) {
        throw new UnauthorizedException('User already exists');
    }
    const newUser = { id: this.users.length + 1, username, password };
    this.users.push(newUser);
    const { password: userPassword, ...result } = newUser; // Exclude the password from the result
    return result;
}
  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password: userPassword, ...result } = user; // Exclude the password from the result
    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
