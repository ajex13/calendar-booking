import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
 
@Entity({ name: "assets" })
class Asset {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    name: string;
    
    @Column({type: "text"})
    description: string;
    
    @Column({type: "text"})
    images: string;
    
    @Column({type: "text"})
    available_slots: string;
    
    @Column({type: "text"})
    rate_per_extra_slot: string;   
}

export default Asset;