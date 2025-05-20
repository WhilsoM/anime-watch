import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/UI/select'

export const LanguageSelector = () => {
	return (
		<section role='toggle-theme'>
			<Select>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='Language' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='ru'>Russian</SelectItem>
					<SelectItem value='en'>English</SelectItem>
				</SelectContent>
			</Select>
		</section>
	)
}
