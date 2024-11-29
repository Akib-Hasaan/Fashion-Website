import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Menu from './components/Menu'
import Button from './components/Button'
import Heading from './components/Heading'
import Fresh from './assets/Fresh.png'
import Banner from './assets/Banner.png'
import collection1 from './assets/collection1.png'
import collection2 from './assets/collection2.png'
import collection3 from './assets/collection3.png'
import promo from './assets/promo.png'
import promoDots from './assets/promoDots.png'
import promoDots2 from './assets/promoDots2.png'
import line from './assets/Line 1.png'
import Footerproduct from './assets/Footerproduct.png'
import Footerproduct2 from './assets/Footerproduct2.png'

function App() {
  return (
    <>


    {/* Navbar */}
    <div className="bg-webtheme">
    <Container className={"max-w-92% pb-1.5 pt-53px"}>
    <Flex className={"justify-between"}>


      {/* Logo */}
      <div className="pt-5px pb-13px">
        <Image src={Fresh}/>
      </div>
      {/* Logo */}

      {/* Menu */}
      <div className="gap-x-60px flex mt-5 font-pop font-semibold text-2xl text-black">
        <Menu text={"Men"}/>
        <Menu text={"Women"}/>
        <Menu text={"Kids"}/>
        <Menu text={"Collection"}/>
        <Menu text={"Trends"}/>
      </div>
      {/* Menu */}

      {/* Buttons */}
      <div className="flex">
        <Button text={"Login"} className={" mr-2.5 font-pop font-semibold text-2xl text-black border border-border hover:bg-btnhover hover:border-btnhover hover:drop-shadow-none px-29px pt-19px pb-3.5 rounded-10px drop-shadow-lg"} />
        <Button text={"Sign Up"} className={"font-pop font-semibold text-2xl text-black border border-border hover:bg-btnhover hover:border-btnhover hover:drop-shadow-none pt-19px pb-3.5 px-15px rounded-10px drop-shadow-lg"} />
      </div>
      {/* Buttons */}

      
    </Flex>
    </Container>
    </div>
    {/* Navbar */}


    {/* Banner Starts */}
    <div className="bg-webtheme">
      <Container className={"max-w-88% pt-123px pb-102px"}>
        <Flex className={"justify-between"}>


          {/* Banner h1,p & btns Start  */}
          <div className="w-44%">

          {/* Banner Heading Starts */}
          <Heading text={"Find The Best Fashion Style For You"} className={"font-pop font-semibold text-64px text-black pr-9 pb-11"} as={"h1"}/>
          {/* Banner Heading Ends */}

          {/* Banner Paragraph Starts */}
          <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} className={"font-pop text-22px text-black pr-6 pb-20"} as={"p"}/>
          {/* Banner Paragraph Ends */}

          {/* Banner Buttons Start */}
          <Button text={"SHOP NOW"} className={"font-pop font-semibold text-2xl text-black px-24 py-8 border border-border hover:text-white hover:bg-black hover:border-black rounded-10px"} />
           {/* Banner Buttons End */}

          
          </div>
          {/* Banner h1,p & btns Start  */}

          {/* Banner Image Starts */}
          <div className="w-1/2">
          <Image src={Banner}/>
          </div>
          {/* Banner Image Ends */}


        </Flex>
      </Container>
    </div>
    {/* Banner Ends */}


    {/* Collection Starts */}
    <div className="pt-230px pb-180px">


      {/* Collection Heading Starts */}
    <Container className={"max-w-33% pb-32"}>
      <Heading text={"New Collection"} className={"font-Frank font-bold text-64px text-black"} as={"h2"}/>
    </Container>
      {/* Collection Heading Ends */}

      {/* Collection Items Start */}
    <Container className={"max-w-89% pb-180px"}>
      <Flex className={"justify-between"}>
        <div className="relative">
          <Image src={collection1}/>
          <Button text={"Sweater"} className={"font-pop text-black text-2xl bg-white px-108px rounded-20px py-4 absolute left-1/2 bottom-11 -translate-x-1/2 hover:text-white hover:bg-black"}/>
        </div>
        <div className="relative">
          <Image src={collection2}/>
          <Button text={"Jeans"} className={"font-pop text-black text-2xl bg-white px-108px rounded-20px py-4 absolute left-1/2 bottom-11 -translate-x-1/2 hover:text-white hover:bg-black"}/>
        </div>
        <div className="relative">
          <Image src={collection3}/>
          <Button text={"Shoes"} className={"font-pop text-black text-2xl bg-white px-108px rounded-20px py-4 absolute left-1/2 bottom-11 -translate-x-1/2 hover:text-white hover:bg-black"}/>
        </div>
      </Flex>
    </Container>
      {/* Collection Items End */}


    </div>
    {/* Collection Ends */}


    {/* Promo */}
    <Container className={"max-w-92% relative pb-7"}>


      {/* Promo Picture Starts */}
      <Image src={promo} className={"absolute top-63px right-599px"}/>
      {/* Promo Picture Ends */}

      {/* Promo Dots & Description Starts */}
      <Flex className={"justify-between"}>
        

        {/* Promo Dots */}
        <div className="w-59% h-730px">
        <Image src={promoDots} className={"ms-auto"}/>
        </div>
        {/* Promo Dots */}

        {/* Promo heading,paragraph Starts */}
        <div className="w-35%">


          {/* Promo Heading Starts */}
          <Heading text={"Best Fashion Since 2010"} className={"font-Frank font-bold text-64px text-black pt-145px pb-83px"} as={"h3"}/>
          {/* Promo Heading Starts */}


          {/* Promo Paragraph Starts */}
          <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} className={"font-pop font-semibold text-2xl text-black pr-22px "} as={"p"}/>
          {/* Promo Paragraph Ends */}


        </div>
        {/* Promo heading,paragraph Starts */}
        
        
      </Flex>
      {/* Promo Dots & Description Ends */}

      {/* Promo Statistics Starts */}
      <div className="ms-auto w-67% py-66px bg-statistics rounded-20px flex">
        <div className="ml-78px mr-60px flex">
          <div className="mr-30px">
            <Heading text={"2010"} className={"font-pod font-bold text-64px text-black pb-48px"} as={"h3"}/>
            <Heading text={"Founded"} className={"font-pop font-medium text-28px"} as={"p"}/>
          </div>
          <Image src={line}/>
        </div>
        <div className="mr-10 flex">
          <div className="mr-46px">
            <Heading text={"5000+"} className={"font-pod font-bold text-64px text-black pb-48px"} as={"h3"}/>
            <Heading text={"Product Sold"} className={"font-pop font-medium text-28px"} as={"p"}/>
          </div>
          <Image src={line}/>
        </div>
        <div className="mr-46px flex">
          <div className="">
            <Heading text={"4500+"} className={"font-pod font-bold text-64px text-black pb-48px"} as={"h3"}/>
            <Heading text={"Best Reviews"} className={"font-pop font-medium text-28px"} as={"p"}/>
          </div>
        </div>
      </div>
      {/* Promo Statistics Ends */}


    </Container>  
    {/* Promo */}


    {/* Footer */}
    <div className="relative">
    <div className="w-30%">
    <Image src={promoDots2} className={"ms-auto"}/>
    </div>
    <div className="bg-footer w-full absolute top-147px">
      <Container className={"pt-56px pb-191px max-w-87%"}>
        <Flex className={"gap-x-31px"}>
        <div className="w-37%">
          <Heading text={"Best Seller Product"} className={"font-Frank font-bold text-white text-64px pb-64px"} as={"h3"}/>
          <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} className={"font-Frank font-bold text-white text-2xl pb-66px"} as={"p"}/>
          <Button text={"Learn More"} className={"font-pop font-semibold text-2xl text-black border bg-white rounded-10px hover:bg-black  hover:text-white px-87px py-8"}/>
        </div>
        <div className="h-556px w-53% pt-8">
          <Flex className={"gap-x-31px"}>
          <Image src={Footerproduct}/>
          <Image src={Footerproduct2}/>
          </Flex>
        </div>
        </Flex>
      </Container>
    </div>
    </div>
    {/* Footer */}
    </>
  )
}

export default App
