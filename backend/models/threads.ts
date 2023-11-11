import mongoose, {Document} from 'mongoose'

const Schema = mongoose.Schema


interface Comment {
    content: string,
    comment_id: number,
    likes: number,
    dislikes: number,
    user_id: string
}

interface Answer {
    content: string,
    comments: Comment[]
    likes: number,
    dislikes: number,
    answer_id: number
    user_id: string,
}

interface Discussion {
    answers: Answer[]
}

export interface IThreads extends Document {
    _id: string,
    title: string,
    descrtiption: string,
    creator_id: string,
    discussion_box: Discussion
}

const ThreadsSchema = new Schema({
    title :{ type: String, required: true },
    description :{ type: String, required: true },
    creator_id :{ type: String, required: true },
    discussion_box: {type: Object,required: true},
},{timestamps: true})

export default mongoose.model<IThreads>("Threads", ThreadsSchema);