// const getRemainingTime = deadline => {
//     let now = new Date(),
//         remainTime = (new Date(deadline) - now + 1000) / 1000,
//         remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
//         remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
//         remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
//         remainDays = Math.floor(remainTime / (3600 * 24));
  
//     return {
//       remainSeconds,
//       remainMinutes,
//       remainHours,
//       remainDays,
//       remainTime
//     }
//   };
  
//   const countdown = (deadline,elem,finalMessage) => {
//     const el = document.getElementById(elem);
  
//     const timerUpdate = setInterval( () => {
//       let t = getRemainingTime(deadline);
//       el.innerHTML = `
      
//       <div class="clll_contador_dias"> 
//       <div class="box_dgg"> ${t.remainDays}  </div>
//               <div class="box_nnme"> Dias </div>
//       </div>

//       <div class="separr"></div>

//       <div class="clll_contador_dias"> 
//       <div class="box_dgg"> ${t.remainHours}   </div>
//               <div class="box_nnme"> Horas </div>
//       </div>

//       <div class="separr"></div>

//       <div class="clll_contador_dias">  
//       <div class="box_dgg"> ${t.remainMinutes}   </div>
//               <div class="box_nnme"> Minutos </div>
//       </div>

//       <div class="separr"></div>
      
//       <div class="clll_contador_dias"> 
//       <div class="box_dgg"> ${t.remainSeconds}    </div>
//               <div class="box_nnme"> Minutos </div>
//       </div>

    
//       `;
  
//       if(t.remainTime <= 1) {
//         clearInterval(timerUpdate);
//         el.innerHTML = finalMessage;
//       }
  
//     }, 1000)
//   };
  
//   countdown('Dec 31 2025 21:34:40 GMT-0500', 'contador', '¡Ya empezó!');
  

//   $('.btmmm_rd_more').click(function(){
//     $('.contentt').hide();
//     $('.flotante_info').show();
//   });

//   $('.btm_close').click(function(){
//     $('.contentt').show();
//     $('.flotante_info').hide();
//   });