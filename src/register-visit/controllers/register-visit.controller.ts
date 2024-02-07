import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RegisterVisitService } from "../services/register-visit.service";
import { RegisterVisitDto } from "../dto/register-visit.dto";

@Controller("register-visit")
export class RegisterVisitController {
  constructor(
    private readonly registerVisitService: RegisterVisitService
  ) {
  }

  @Get(":name")
  async allByPersonName(@Param("name") name: string) {
    return this.registerVisitService.allByPersonName(name);
  }

  @Post()
  async create(@Body() registerVisitDto: RegisterVisitDto) {
    return this.registerVisitService.create(registerVisitDto);
  }
}
