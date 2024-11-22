import {
    Home as HomeIcon,
    Search,
    Library,
    ChevronLeft,
    ChevronRight,
    Play,
    Shuffle,
    SkipBack,
    SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2
} from 'lucide-react'
import Image from "next/image";


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"/>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                <div className="w-3 h-3 bg-green-500 rounded-full"/>
            </div>
            <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <HomeIcon />
                    Home
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Search />
                    Search
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Library/>
                    Your Library
                </a>
            </nav>

            <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
                <a href=" " className="text-sm text-zinc-400 hover:text-zinc-100">Só sertanejo </a>
                <a href=" " className="text-sm text-zinc-400 hover:text-zinc-100">Rock nacional </a>
                <a href=" " className="text-sm text-zinc-400 hover:text-zinc-100">Pra roer no banheiro</a>
                <a href=" " className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>



            </nav>
        </aside>
          <main className="flex-1 p-6">
              <div className="flex items-center gapp-3">
                  <button className="p-1 rounded-full bg-black/40 ">
                      <ChevronLeft/>
                  </button>
                  <button className="p-1 rounded-full bg-black/40">
                      <ChevronRight/>
                  </button>

              </div>
              <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

              <div className="grid grid-cols-3 gap-4 mt-4">

                  <a className="bg-white/5  group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
                      <Image src="/mini-juliano.jpg" width={104} height={104} alt="imagem do album de he juliano"/>
                      <strong>H&J</strong>
                      <button
                          className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                          <Play/>
                      </button>
                  </a>
                  <a className="bg-white/5 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors">
                      <Image src="/marilia.jpg" width={104} height={104} alt="imagem do album de he juliano"/>
                      <strong>Marilia Mendonça</strong>
                      <button
                          className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                          <Play/>
                      </button>
                  </a>

                  <a className="bg-white/5 rounded group flex items-center gap-4  overflow-hidden hover:bg-white/10 transition-colors">
                      <Image src="/embaixador.jpeg" width={104} height={104} alt="imagem do album de he juliano"/>
                      <strong>Buteco do GL</strong>
                      <button
                          className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                          <Play/>
                      </button>
                  </a>

                  <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                      <Image src="/kitara.jpeg" width={104} height={104} alt="imagem do album de he juliano"/>
                      <strong>Banda Kitara</strong>
                      <button
                          className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                          <Play/>
                      </button>

                  </a>
                  <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                      <Image src="/bruno-marrone.jpg" width={104} height={104} alt="imagem do album de he juliano"/>
                      <strong>Bruno e Marrone</strong>
                      <button
                          className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                          <Play/>
                      </button>

                  </a>
                  <a className="bg-white/5 rounded group flex items-center gap-4 hover:bg-white/10 overflow-hidden transition-colors">
                      <Image src="/mini-juliano.jpg" width={104} height={104} alt="imagem do album de he juliano"/>
                      <strong>H&J</strong>
                      <button
                          className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                          <Play/>
                      </button>

                  </a>

              </div>

              <h2 className="font-semibold text-2xl mt-10">Made for Igor Beltrão</h2>

              <div className="grid grid-cols-6 gap-4 mt-4">
                  <a className="bg-white/5 gap-2 flex flex-col p-2 rounded-md hover:bg-white/10">
                      <Image src="/embaixador.jpeg" className="w-full" width={120} height={120}
                             alt="imagem do album de he juliano"/>
                      <strong className="font-semibold">Buteco</strong>
                      <span className="text-sm text-zinc-500">Gusttavo lima, Leonardo, H&J</span>
                  </a>
                  <a className="bg-white/5 p-3 gap-2 flex flex-col rounded-md hover:bg-white/10">
                      <Image src="/kitara.jpeg" className="w-full" width={120} height={120}
                             alt="imagem do album da banda kitara"/>
                      <strong className="font-semibold">Banda Kitara</strong>
                      <span className="text-sm text-zinc-500">Para ouvir nos paredões</span>
                  </a>
                  <a href=" " className="bg-white/5 gap-2 p-3 flex flex-col rounded-md hover:bg-white/10">
                      <Image src="/mini-juliano.jpg" className="w-full" width={120} height={120}
                             alt="imagem do album de he juliano"/>
                      <strong className="font-semibold">H&J</strong>
                      <span className="text-sm text-zinc-500">Tudo sobre os dois artistas</span>
                  </a>
                  <a href=" " className="bg-white/5 gap-2 p-2 flex flex-col rounded-md hover:bg-white/10">
                      <Image src="/marilia.jpg" className="w-full" width={120} height={120}
                             alt="imagem do album de gusttavo lima"/>
                      <strong className="font-semibold">Marilia</strong>
                      <span className="text-sm text-zinc-500">Marilia Mendonça, Gusttavo lima, Leonardo, H&J</span>
                  </a>
                  <a href="" className="bg-white/5 gap-2 p-2 rounded-md flex flex-col hover:bg-white/10">
                      <Image src="/embaixador.jpeg" className="w-full" width={120} height={120}
                             alt="imagem do album de he juliano"/>
                      <strong className="font-semibold">Buteco</strong>
                      <span className="text-sm text-zinc-500">Gusttavo lima, Leonardo, H&J</span>
                  </a>
              </div>


          </main>
      </div>
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/kitara.jpeg"  width={56} height={56} alt="imagem do album do Gusttavo lima"/>
                <div className="flex flex-col ">
                    <strong className="font-normal">Que raiva de mim</strong>
                    <span className="text-xs text-zinc-400">Banda Kitara</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle size={20} className="text-zinc-200"/>
                    <SkipBack size={20} className="text-zinc-200"/>
                    <button
                        className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ">
                        <Play/>
                    </button>
                    <SkipForward size={20} className="text-zinc-200"/>
                    <Repeat size={20} className="text-zinc-200"/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600 ">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                    </div>
                    <span className="text-xs text-zinc-400">1:54</span>

                </div>

            </div>
            <div className="flex items-center gap-2">
                <Mic2 size={20}/>
                <LayoutList size={20}/>
                <Laptop2 size={20}/>

                <div className="flex items-center gap-2">
                    <Volume size={20}/>
                    <div className="h-1 rounded-full w-24 bg-zinc-600 ">
                        <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
                    </div>
                </div>
                <Maximize2 size={20}/>


            </div>
        </footer>
    </div>
  );
}
