// NavBar js
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function (e) {
  if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
    toggle.classList.remove('active');
    navbar.classList.remove('active');
  }
}



toggle.onclick = function () {
  toggle.classList.toggle('active');
  navbar.classList.toggle('active');
}

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if (this.scrollY > 20) {
//       $('#header').addClass("sticky");
//     } else {
//       $('#header').removeClass("sticky");
//     }
//   })
// });

//                                    ///






function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // pinType: document.querySelector("#main").style.transform
    //   ? "transform"
    //   : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();





const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     char/male0001.png
     char/male0002.png
     char/male0003.png
     char/male0004.png
     char/male0005.png
     char/male0006.png
     char/male0007.png
     char/male0008.png
     char/male0009.png
     char/male0010.png
     char/male0011.png
     char/male0012.png
     char/male0013.png
     char/male0014.png
     char/male0015.png
     char/male0016.png
     char/male0017.png
     char/male0018.png
     char/male0019.png
     char/male0020.png
     char/male0021.png
     char/male0022.png
     char/male0023.png
     char/male0024.png
     char/male0025.png
     char/male0026.png
     char/male0027.png
     char/male0028.png
     char/male0029.png
     char/male0030.png
     char/male0031.png
     char/male0032.png
     char/male0033.png
     char/male0034.png
     char/male0035.png
     char/male0036.png
     char/male0037.png
     char/male0038.png
     char/male0039.png
     char/male0040.png
     char/male0041.png
     char/male0042.png
     char/male0043.png
     char/male0044.png
     char/male0045.png
     char/male0046.png
     char/male0047.png
     char/male0048.png
     char/male0049.png
     char/male0050.png
     char/male0051.png
     char/male0052.png
     char/male0053.png
     char/male0054.png
     char/male0055.png
     char/male0056.png
     char/male0057.png
     char/male0058.png
     char/male0059.png
     char/male0060.png
     char/male0061.png
     char/male0062.png
     char/male0063.png
     char/male0064.png
     char/male0065.png
     char/male0066.png
     char/male0067.png
     char/male0068.png
     char/male0069.png
     char/male0070.png
     char/male0071.png
     char/male0072.png
     char/male0073.png
     char/male0074.png
     char/male0075.png
     char/male0076.png
     char/male0077.png
     char/male0078.png
     char/male0079.png
     char/male0080.png
     char/male0081.png
     char/male0082.png
     char/male0083.png
     char/male0084.png
     char/male0085.png
     char/male0086.png
     char/male0087.png
     char/male0088.png
     char/male0089.png
     char/male0090.png
     char/male0091.png
     char/male0092.png
     char/male0093.png
     char/male0094.png
     char/male0095.png
     char/male0096.png
     char/male0097.png
     char/male0098.png
     char/male0099.png
     char/male0100.png
     char/male0101.png
     char/male0102.png
     char/male0103.png
     char/male0104.png
     char/male0105.png
     char/male0106.png
     char/male0107.png
     char/male0108.png
     char/male0109.png
     char/male0110.png
     char/male0111.png
     char/male0112.png
     char/male0113.png
     char/male0114.png
     char/male0115.png
     char/male0116.png
     char/male0117.png
     char/male0118.png
     char/male0119.png
     char/male0120.png
     char/male0121.png
     char/male0122.png
     char/male0123.png
     char/male0124.png
     char/male0125.png
     char/male0126.png
     char/male0127.png
     char/male0128.png
     char/male0129.png
     char/male0130.png
     char/male0131.png
     char/male0132.png
     char/male0133.png
     char/male0134.png
     char/male0135.png
     char/male0136.png
     char/male0137.png
     char/male0138.png
     char/male0139.png
     char/male0140.png
     char/male0141.png
     char/male0142.png
     char/male0143.png
     char/male0144.png
     char/male0145.png
     char/male0146.png
     char/male0147.png
     char/male0148.png
     char/male0149.png
     char/male0150.png
     char/male0151.png
     char/male0152.png
     char/male0153.png
     char/male0154.png
     char/male0155.png
     char/male0156.png
     char/male0157.png
     char/male0158.png
     char/male0159.png
     char/male0160.png
     char/male0161.png
     char/male0162.png
     char/male0163.png
     char/male0164.png
     char/male0165.png
     char/male0166.png
     char/male0167.png
     char/male0168.png
     char/male0169.png
     char/male0170.png
     char/male0171.png
     char/male0172.png
     char/male0173.png
     char/male0174.png
     char/male0175.png
     char/male0176.png
     char/male0177.png
     char/male0178.png
     char/male0179.png
     char/male0180.png
     char/male0181.png
     char/male0182.png
     char/male0183.png
     char/male0184.png
     char/male0185.png
     char/male0186.png
     char/male0187.png
     char/male0188.png
     char/male0189.png
     char/male0190.png
     char/male0191.png
     char/male0192.png
     char/male0193.png
     char/male0194.png
     char/male0195.png
     char/male0196.png
     char/male0197.png
     char/male0198.png
     char/male0199.png
     char/male0200.png
     char/male0201.png
     char/male0202.png
     char/male0203.png
     char/male0204.png
     char/male0205.png
     char/male0206.png
     char/male0207.png
     char/male0208.png
     char/male0209.png
     char/male0210.png
     char/male0211.png
     char/male0212.png
     char/male0213.png
     char/male0214.png
     char/male0215.png
     char/male0216.png
     char/male0217.png
     char/male0218.png
     char/male0219.png
     char/male0220.png
     char/male0221.png
     char/male0222.png
     char/male0223.png
     char/male0224.png
     char/male0225.png
     char/male0226.png
     char/male0227.png
     char/male0228.png
     char/male0229.png
     char/male0230.png
     char/male0231.png
     char/male0232.png
     char/male0233.png
     char/male0234.png
     char/male0235.png
     char/male0236.png
     char/male0237.png
     char/male0238.png
     char/male0239.png
     char/male0240.png
     char/male0241.png
     char/male0242.png
     char/male0243.png
     char/male0244.png
     char/male0245.png
     char/male0246.png
     char/male0247.png
     char/male0248.png
     char/male0249.png
     char/male0250.png
     char/male0251.png
     char/male0252.png
     char/male0253.png
     char/male0254.png
     char/male0255.png
     char/male0256.png
     char/male0257.png
     char/male0258.png
     char/male0259.png
     char/male0260.png
     char/male0261.png
     char/male0262.png
     char/male0263.png
     char/male0264.png
     char/male0265.png
     char/male0266.png
     char/male0267.png
     char/male0268.png
     char/male0269.png
     char/male0270.png
     char/male0271.png
     char/male0272.png
     char/male0273.png
     char/male0274.png
     char/male0275.png
     char/male0276.png
     char/male0277.png
     char/male0278.png
     char/male0279.png
     char/male0280.png
     char/male0281.png
     char/male0282.png
     char/male0283.png
     char/male0284.png
     char/male0285.png
     char/male0286.png
     char/male0287.png
     char/male0288.png
     char/male0289.png
     char/male0290.png
     char/male0291.png
     char/male0292.png
     char/male0293.png
     char/male0294.png
     char/male0295.png
     char/male0296.png
     char/male0297.png
     char/male0298.png
     char/male0299.png
     char/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#welcome", {
  scrollTrigger: {
    trigger: `#welcome`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
// gsap.to("#load", {
//   scrollTrigger: {
//     trigger: `#page3`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `#main`
//   }
// }) 




// cursor script

// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.pageX + 'px';
//   cursor.style.top = e.pageY + 'px';
// })
