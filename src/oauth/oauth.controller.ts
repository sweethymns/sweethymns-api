import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @UseGuards(AuthGuard('basic'))
  @Post('token')
  async authenticate(@Request() req) {
    return this.oauthService.authenticate(req.user);
  }
}
