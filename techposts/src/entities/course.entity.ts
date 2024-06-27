import { ICourse } from './models/course.interface'

export class Course implements ICourse {
  id?: number
  name: string
  period: string
  school_class: string
  person_id?: number

  constructor(name: string, period: string, school_class: string) {
    this.name = name
    this.period = period
    this.school_class = school_class
  }
}
