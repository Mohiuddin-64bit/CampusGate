import Title from './ui/Title'

const Gallery = () => {
  const gallery = [
    {
      img: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      img: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      img: "https://images.unsplash.com/photo-1561489401-fc2876ced162?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  return (
    <div className='bg-[#0C1425]'>
      <div className='container mx-auto'>

        <Title title="University Gallery" subtitle="Discover the best colleges in the world" />
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>

          {
            gallery.slice(0, 4).map((img, index) => (
              <div className='relative' key={index}>
                <img key={index} src={img.img} alt={`Gallery ${index + 1}`} className='w-full hover:opacity-50 transition-all rounded-sm h-[300px] object-cover' />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery