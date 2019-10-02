import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/v1/auth')
export class AuthController {
  @UseGuards(AuthGuard('oauth2-client-password'))
  @Post('token')
  async authenticate(@Request() req) {
    return req.user;
  }
}
