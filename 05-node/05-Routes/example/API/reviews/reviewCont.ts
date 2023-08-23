import { Review } from "./reviewmodel";

let reviews:Review[] =[
    new Review({name:"leshona",freetext:"garbege",})]

export const addReview= (req,res)=>{
    const review: Review = req.body;
    reviews.push(new Review(review))
    res.send({ review });
}

export const GetReview=(req,res)=>{
    res.send({reviews})
}

export const deleteReview=(req,res)=>{
    const{id}=req.body
    reviews=reviews.filter((review)=>review.id!==id)
    res.send({reviews})
}

export const updateReview=(req,res)=>{

    const {id,freetext}= req.body
    const review= reviews.find((review)=>review.id===id)
    review.freetext=freetext
    res.send(reviews)

}



