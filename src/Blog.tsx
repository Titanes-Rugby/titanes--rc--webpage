import './App.css';

import { useState } from 'react';
import reactLogo from './assets/react.svg';

import Menu from '@components/Menu';

interface Props {
	title: string;
	brief: string;
	image: string;
}
const BlogItem = ({ title, brief, image }: Props) => {
	return (
		<figure className="group/card bg-white rounded-xl bg-clip-border shadow-md w-72 flex flex-col relative">
			<img className="w-full rounded-t-xl max-h-36 object-cover" src={image} />
			<div className="p-2 text-left text-slate-600">
				<h2 className="text-slate-800">{title}</h2>
				<p className="text-slate-400 truncate group-hover/card:text-clip">{brief}</p>
			</div>
			<div className="absolute bg-red-500 rounded-full w-8 h-8 top-1 right-1 group-hover/card:bg-blue-500"></div>
		</figure>
	);
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="overflow-hidden flex-col min-h-[100vh] flex">
			<Menu />
			<div className="w-full max-w-xl my-0 mx-auto p-2 text-center">
				<div className="grid grid-rows-2 grid-flow-col gap-4">
					<BlogItem
						image="https://journey.app/blog/wp-content/uploads/2022/01/lineout-rugby.jpg"
						title="Title"
						brief="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis alias voluptatum, quod quidem maxime
					nostrum et eos ea odio magni illo numquam suscipit, expedita dolores deserunt totam minima sit eum."
					/>

					<BlogItem
						image="https://i.cbc.ca/1.6723605.1674514378!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/canada-women-rugby-221112-1180.jpg"
						title="Title"
						brief="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis alias voluptatum, quod quidem maxime
					nostrum et eos ea odio magni illo numquam suscipit, expedita dolores deserunt totam minima sit eum."
					/>
					<BlogItem
						image="https://journey.app/blog/wp-content/uploads/2022/01/lineout-rugby.jpg"
						title="Title"
						brief="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis alias voluptatum, quod quidem maxime
					nostrum et eos ea odio magni illo numquam suscipit, expedita dolores deserunt totam minima sit eum."
					/>

					<BlogItem
						image="https://journey.app/blog/wp-content/uploads/2022/01/lineout-rugby.jpg"
						title="Title"
						brief="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis alias voluptatum, quod quidem maxime
					nostrum et eos ea odio magni illo numquam suscipit, expedita dolores deserunt totam minima sit eum."
					/>
				</div>

				<div className="flex justify-center">
					<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
						<img src="/vite.svg" className="h-24 p-6 hover:drop-shadow-[0_0_1em_#646cffaa]" alt="Vite logo" />
					</a>
					<a href="https://reactjs.org" target="_blank" rel="noreferrer">
						<img src={reactLogo} className="h-24 p-6 hover:drop-shadow-[0_0_1em_#61dafbaa]" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className="flex flex-col items-center gap-2 p-8">
					<button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className="text-slate-400">Click on the Vite and React logos to learn more</p>
			</div>
		</div>
	);
}

export default App;
