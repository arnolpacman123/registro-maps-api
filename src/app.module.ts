import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { options } from "./config/orm.config";
import { RegisterPersonController } from "./register-person/controllers/register-person.controller";
import { RegisterPersonService } from "./register-person/services/register-person.service";
import { RegisterPersonEntity } from "./register-person/entities/register-person.entity";
import { RegisterVisitController } from "./register-visit/controllers/register-visit.controller";
import { RegisterVisitService } from "./register-visit/services/register-visit.service";
import { RegisterVisitEntity } from "./register-visit/entities/register-visit.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([ RegisterPersonEntity, RegisterVisitEntity ])
  ],
  controllers: [ AppController, RegisterPersonController, RegisterVisitController ],
  providers: [ AppService, RegisterPersonService, RegisterVisitService ]
})
export class AppModule {
}
