export class CreateActorDto {
  first_name: string;
  last_name: string;
  date_of_birth?: Date;
  date_of_death?: Date;
}

export class UpdateActorDto {
  first_name?: string;
  last_name?: string;
  date_of_birth?: Date;
  date_of_death?: Date;
}
