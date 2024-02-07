import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Point } from "geojson";
import { RegisterPersonEntity } from "../../register-person/entities/register-person.entity";

@Entity({
  name: "register_visit"
})
export class RegisterVisitEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  address: string;

  @Column({
    type: "geometry",
    spatialFeatureType: "Point",
    srid: 4326
  })
  geom: Point;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP"
  })
  hour?: string;

  @Column()
  description?: string;

  @ManyToOne(() => RegisterPersonEntity, person => person.visits!)
  @JoinColumn({
    name: "person_id"
  })
  person: RegisterPersonEntity;
}