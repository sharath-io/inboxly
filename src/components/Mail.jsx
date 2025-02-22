import { getFormattedDate } from "../services/getFormattedDate";

export const Mail=({mail}) =>{
    const {id,from:{name,email},date,subject,short_description} = mail
    const formattedDate = getFormattedDate(date);
    return (
      <div key={id} className="m-5 border-2 border-[#cfd2dc] p-4 rounded-lg
      flex gap-10 cursor-pointer
      ">
        <div className="rounded-full bg-[#e54065] h-10 w-10 text-white flex items-center justify-center">
          {name[0].toUpperCase()}
        </div>
          <div>
              <p>From : {name} {email}</p>
              <p>Subject : {subject}</p>
              <p>{short_description}</p>
              <p>{formattedDate}</p>
       </div>
      </div>
    )
}