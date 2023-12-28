export default function SkillCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-11/12  p-2 text-center justify-center flex flex-col h-48">
            <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img>
            <p className="text-xs font-bold sm:text-xl ">{props.name}</p>
        </div>
    )
}