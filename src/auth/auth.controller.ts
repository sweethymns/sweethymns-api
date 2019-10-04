import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('oauth2-client-password'))
  @Post('token')
  async authenticate(@Request() req) {
    return this.authService.authenticate(req.user);
  }
}
