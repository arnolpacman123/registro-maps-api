import { Body, Controller, Get, Post } from "@nestjs/common";
import { RegisterPersonService } from "../services/register-person.service";
import { RegisterPersonDto } from "../dto/register-person.dto";

@Controller("register-person")
export class RegisterPersonController {
  constructor(
    private readonly registerPersonService: RegisterPersonService
  ) {
  }

  @Get("")
  async all() {
    return await this.registerPersonService.all();
  }

  @Post("")
  async create(
    @Body() registerPersonDto: RegisterPersonDto
  ) {
    return await this.registerPersonService.create(registerPersonDto);
  }

  @Get("seed")
  async seed() {
    return await this.registerPersonService.seed();
  }
}
