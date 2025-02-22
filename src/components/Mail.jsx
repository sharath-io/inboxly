export const Mail=({mail}) =>{
    const {id,from:{name,email},date,subject,short_description} = mail
    return (
      <div key={id} style={{border:"1px solid black", margin:"5px 10px", padding:"10px"}}>
       <p>From : ${name} {email}</p>
       <p>Subject : {subject}</p>
       <p>{short_description}</p>
       <p>{date}</p>
      </div>
    )
}