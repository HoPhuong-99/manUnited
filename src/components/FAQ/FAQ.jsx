import React, { useState } from 'react'
import Content from './Content'

const FAQ = () => {

  const FAQ = [
    {
      title: 'WHERE CAN I VIEW MY NFTS?',
      content: 'Once minted or bought simply connect to your OpenSea account to view your NFTs.',
      id: 1,
      status:false
    },
    {
      title: 'WHAT IS THE METAVERSE?',
      content: 'A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.',
      id: 2,
      status:false
    },
    {
      title: 'WHY DO WE NEED ROYALTIES?',
      content: "The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.",
      id: 3,
      status:false
    },
    {
      title: 'HOW CAN I USE MY NFT?',
      content: "You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.",
      id: 4,
      status:false
    },
    {
      title: 'WHAT ARE THE WEIRDOS?',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.",
      id: 5,
      status:false
    },
    {
      title: 'WHAT IS THE FUSION PROCESS?',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.",
      id: 6,
      status:false
    }

  ]

  const [content, setContent] = useState(FAQ)

  const handleShow = (id) => {
  const sta =  content.findIndex((obj => obj.id === id))
  let newArr = [...content]
  newArr[sta].status = !content[sta].status
  setContent(newArr);
}

  return (
    
    <section className='bg-slate-800 flex justify-center items-center flex-col md-mobile-view lg-desktop-view ' id='fag'>
      <h1 className='md-mobile-h1'>
        FAQ
      </h1>
      <div className='div-content-mobile div-content-desktop mx-[32px] my-[30px]'>
      {
        content.map((contentItem , id) => {
          return (
            <Content key={id} index={contentItem.id} title={contentItem.title} content={contentItem.content} icon={contentItem.AiOutlinePlus} handleShow={() => handleShow(contentItem.id)} showSpan={contentItem.status} />
          )
        })
      }
      </div>
    </section>
  )
}

export default FAQ