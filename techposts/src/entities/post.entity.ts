import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IPost } from './models/post.interface'

@Entity({
  name: 'post',
})
export class Post implements IPost {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string | undefined

  @Column({ name: 'name', type: 'varchar' })
  name: string

  @Column({ name: 'content', type: 'text' })
  content: string

  @Column({ name: 'image_url', type: 'varchar' })
  image_url: string
}
