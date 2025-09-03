import { gsap } from "gsap";

function WavyPath() {
  
        ////////////////line//////////////////

        let defaulValue = "M 10 80 Q 500 80 990 80"
        let endValue = "M 10 100 Q 500 100 990 100"

        let line = document.querySelector('#line');

        line.addEventListener('mousemove',function(e){
            defaulValue = `M 10 80 Q ${e.x} ${e.y} 990 80`

            gsap.to('svg path',{
                attr:{d:defaulValue},
                duration:0.5,
                ease:'power3.out'
            })
        })
        line.addEventListener('mouseleave',function(){
            gsap.to('svg path',{
                attr:{d:endValue},
                duration:1.5,
                ease:'elastic.out(1,0.2)'
            })
        })


        ////////////////line//////////////////


  return (
    <div id='line'>
        <svg width="1000" height="200" className='overflow-visible'>
            <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent" />
        </svg>
    </div> 
  );
}

export default WavyPath;
