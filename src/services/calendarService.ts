import axios, { AxiosResponse } from 'axios'

export default class CalendarService {
  static async getCalendar(): Promise<AxiosResponse> {
		try {
			const response = await axios.get(`https://dpg.gg/test/calendar.json`)
			return response
		} catch (error: any) {
			return error.response
		}
  }
}