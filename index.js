const express = require('express')
const cors = require('cors')
const port = 3001
const app = express()

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`)
  console.log(`Server listening on port ${server.address().port}`)
})
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())
app.use(cors())

app.post('/auth/login', (req, res) => {
  const code = req.body.code
  console.log('Code = ' + code)
  res.json(
    {
      data: {
        "apiKey": "123"
      }
    }
  );
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/cookies/checked/false', (req, res) => {
  res.json({
    data: [
      {
        _id: '62e263319977c7001fbc49851',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a1',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49852',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a2',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49853',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a3',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49854',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a4',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49855',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a5',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49856',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a6',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49857',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a7',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49858',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a8',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49859',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a9',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49850',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a0',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
    ]
  })
})

app.get('/cookies/checked/ads', (req, res) => {
  res.json({
    data: [
      {
        _id: '62e263319977c7001fbc49851',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: true,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: 'ads',
      },
      {
        _id: '62e263609977c7001fbc498a1',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: true,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: 'ads',
      },
    ]
  })
})

app.get('/cookies/checked/empty', (req, res) => {
  res.json({
    data: [
      {
        _id: '62e263319977c7001fbc49851',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: true,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: 'empty',
      },
      {
        _id: '62e263609977c7001fbc498a1',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: true,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: 'empty',
      },
    ]
  })
})

app.get('/employee', (req, res) => {
  res.json({
    data: [
      {
        _id: 1,
        name: '竹田恵美子',
        reading: 'たけだえみこ'
      },
      {
        _id: 2,
        name: '横尾弘子',
        reading: 'よこおひろこ'
      },
    ]
  })
})

app.get('/report', (req, res) => {
  res.json({
    data: [
      {
        _id: '1',
        time: '2023-01-11 15:30',
        date: "2023-01-11",
        distance: "1",
        employee: {
          _id: 1,
          name: '竹田恵美子',
          reading: 'たけだえみこ'
        },
        posting: {
          amount: '2',
          district: "佐原地区",
          reading: "いわがさきだい",
          region: "岩ヶ崎台",
          regionID: 49,
          schoolDistrict1: "佐原中学区",
          schoolDistrict2: "佐原中学区⑧"
        },
        memo: ''
      }
    ]
  })
})


// no
app.get('/regions', (req, res) => {
  res.json({
    data: [
      {
       "_id": 1,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "西関戸",
       "reading": "にしせきど"
      },
      {
       "_id": 2,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "竹の下",
       "reading": "たけのした"
      },
      {
       "_id": 3,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "東関戸",
       "reading": "ひがしせきど"
      },
      {
       "_id": 4,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "仲川岸",
       "reading": "なかがわぎし"
      },
      {
       "_id": 5,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "諏訪下",
       "reading": "すわくだり"
      },
      {
       "_id": 6,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "神明町",
       "reading": "しんめいまち"
      },
      {
       "_id": 7,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "諏訪台",
       "reading": "すわうてな"
      },
      {
       "_id": 8,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "平台",
       "reading": "ひらだい"
      },
      {
       "_id": 9,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "諏訪上",
       "reading": "すわかみ"
      },
      {
       "_id": 10,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区①",
       "region": "北",
       "reading": "きた"
      },
      {
       "_id": 11,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "北横宿",
       "reading": "きたよこじゅく"
      },
      {
       "_id": 12,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "南横宿",
       "reading": "みなみよこじゅく"
      },
      {
       "_id": 13,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "横川岸",
       "reading": "よこかわみね"
      },
      {
       "_id": 14,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "下分",
       "reading": "しもぶん"
      },
      {
       "_id": 15,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "下宿",
       "reading": "げしゅく"
      },
      {
       "_id": 16,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "中宿",
       "reading": "なかじく"
      },
      {
       "_id": 17,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "上中宿",
       "reading": "かみなかしゅく"
      },
      {
       "_id": 18,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "上宿",
       "reading": "かみじゅく"
      },
      {
       "_id": 19,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "上宿台",
       "reading": "かみしゅくだい"
      },
      {
       "_id": 20,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "上新町",
       "reading": "かみしんまち"
      },
      {
       "_id": 21,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "下新町",
       "reading": "したしんまち"
      },
      {
       "_id": 22,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "若松町",
       "reading": "わかまつまち"
      },
      {
       "_id": 23,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "新橋本",
       "reading": "しんはしもと"
      },
      {
       "_id": 24,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "新上川岸",
       "reading": "しんうわかわぎし"
      },
      {
       "_id": 25,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "田中",
       "reading": "たなか"
      },
      {
       "_id": 26,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区②",
       "region": "本橋元",
       "reading": "もとはしげんじ"
      },
      {
       "_id": 27,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区③",
       "region": "下川岸",
       "reading": "しもかわみね"
      },
      {
       "_id": 28,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区③",
       "region": "浜宿",
       "reading": "はましゅく"
      },
      {
       "_id": 29,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区③",
       "region": "本川岸",
       "reading": "ほんがわみね"
      },
      {
       "_id": 30,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区③",
       "region": "舟戸",
       "reading": "ふなと"
      },
      {
       "_id": 31,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区④",
       "region": "本町",
       "reading": "ほんまち"
      },
      {
       "_id": 32,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区④",
       "region": "上仲町",
       "reading": "かみなかまち"
      },
      {
       "_id": 33,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区④",
       "region": "下仲町",
       "reading": "しもなかまち"
      },
      {
       "_id": 34,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区④",
       "region": "田宿",
       "reading": "たじゅく"
      },
      {
       "_id": 35,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区④",
       "region": "寺宿",
       "reading": "てらじゅく"
      },
      {
       "_id": 36,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑤",
       "region": "八日市場",
       "reading": "ようかいちば"
      },
      {
       "_id": 37,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑤",
       "region": "荒久",
       "reading": "あらひさ"
      },
      {
       "_id": 38,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑤",
       "region": "仁井宿",
       "reading": "にいしゅく"
      },
      {
       "_id": 39,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑥",
       "region": "高野",
       "reading": "たかの"
      },
      {
       "_id": 40,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑥",
       "region": "橋替",
       "reading": "はしがえ"
      },
      {
       "_id": 41,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑥",
       "region": "牧野",
       "reading": "まきの"
      },
      {
       "_id": 42,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑦",
       "region": "水郷町",
       "reading": "すいごうちょう"
      },
      {
       "_id": 43,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑦",
       "region": "粉名口団地",
       "reading": "こなぐちだんち"
      },
      {
       "_id": 44,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑦",
       "region": "寿町",
       "reading": "ことぶきまち"
      },
      {
       "_id": 45,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑦",
       "region": "粉名口",
       "reading": "こなぐち"
      },
      {
       "_id": 46,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑦",
       "region": "水郷大橋町",
       "reading": "すいごうおおはしちょう"
      },
      {
       "_id": 47,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑧",
       "region": "玉造",
       "reading": "たまつくり"
      },
      {
       "_id": 48,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑧",
       "region": "岩ヶ崎",
       "reading": "いわがさき"
      },
      {
       "_id": 49,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑧",
       "region": "岩ヶ崎台",
       "reading": "いわがさきだい"
      },
      {
       "_id": 50,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑨",
       "region": "篠原",
       "reading": "しのはら"
      },
      {
       "_id": 51,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑨",
       "region": "みどり町",
       "reading": "みどりまち"
      },
      {
       "_id": 52,
       "district": "佐原地区",
       "schoolDistrict1": "佐原中学区",
       "schoolDistrict2": "佐原中学区⑨",
       "region": "旭ヶ丘",
       "reading": "あさひがおか"
      },
      {
       "_id": 53,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区①",
       "region": "香取",
       "reading": "かとり"
      },
      {
       "_id": 54,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区①",
       "region": "新市場",
       "reading": "しんしじょう"
      },
      {
       "_id": 55,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区①",
       "region": "新部",
       "reading": "しんべ"
      },
      {
       "_id": 56,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区②",
       "region": "丁子",
       "reading": "ちょうじ"
      },
      {
       "_id": 57,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区②",
       "region": "吉原",
       "reading": "よしはら"
      },
      {
       "_id": 58,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区②",
       "region": "多田",
       "reading": "ただ"
      },
      {
       "_id": 59,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区③",
       "region": "津宮",
       "reading": "つのみや"
      },
      {
       "_id": 60,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区③",
       "region": "大倉丁子",
       "reading": "おおくらよぼろび"
      },
      {
       "_id": 61,
       "district": "佐原地区",
       "schoolDistrict1": "香取中学区",
       "schoolDistrict2": "香取中学区③",
       "region": "大倉",
       "reading": "おおくら"
      },
      {
       "_id": 62,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区①",
       "region": "大崎",
       "reading": "おおさき"
      },
      {
       "_id": 63,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区①",
       "region": "大根",
       "reading": "だいこん"
      },
      {
       "_id": 64,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区①",
       "region": "長山",
       "reading": "ながやま"
      },
      {
       "_id": 65,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区②",
       "region": "返田",
       "reading": "かやだ"
      },
      {
       "_id": 66,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区②",
       "region": "九美上",
       "reading": "くみあげ"
      },
      {
       "_id": 67,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区②",
       "region": "下小野",
       "reading": "しもおの"
      },
      {
       "_id": 68,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区③",
       "region": "本矢作",
       "reading": "もとやはぎ"
      },
      {
       "_id": 69,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区③",
       "region": "福田",
       "reading": "ふくだ"
      },
      {
       "_id": 70,
       "district": "佐原地区",
       "schoolDistrict1": "三中学区",
       "schoolDistrict2": "三中学区③",
       "region": "伊地山",
       "reading": "いちやま"
      },
      {
       "_id": 71,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "森戸",
       "reading": "もりと"
      },
      {
       "_id": 72,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "新寺",
       "reading": "にいでら"
      },
      {
       "_id": 73,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "大戸川",
       "reading": "だいとがわ"
      },
      {
       "_id": 74,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "大戸",
       "reading": "おおど"
      },
      {
       "_id": 75,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "大戸新田",
       "reading": "おおどしんでん"
      },
      {
       "_id": 76,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "上小川",
       "reading": "かみおがわ"
      },
      {
       "_id": 77,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "関",
       "reading": "せき"
      },
      {
       "_id": 78,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "片野",
       "reading": "かたの"
      },
      {
       "_id": 79,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "飯島",
       "reading": "いいじま"
      },
      {
       "_id": 80,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "多田島",
       "reading": "ただしまむね"
      },
      {
       "_id": 81,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区①",
       "region": "昭和町",
       "reading": "しょうわちょう"
      },
      {
       "_id": 82,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "谷中",
       "reading": "たになか"
      },
      {
       "_id": 83,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "みずほ台",
       "reading": "みずほだい"
      },
      {
       "_id": 84,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "堀之内",
       "reading": "ほりのうち"
      },
      {
       "_id": 85,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "寺内",
       "reading": "てらうち"
      },
      {
       "_id": 86,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "鴇崎",
       "reading": "ときざき"
      },
      {
       "_id": 87,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "西和田",
       "reading": "にしわだ"
      },
      {
       "_id": 88,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "西坂",
       "reading": "にしざか"
      },
      {
       "_id": 89,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "西部田",
       "reading": "にしべた"
      },
      {
       "_id": 90,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区②",
       "region": "川尻",
       "reading": "かわじり"
      },
      {
       "_id": 91,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区③",
       "region": "与倉",
       "reading": "よくら"
      },
      {
       "_id": 92,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区③",
       "region": "観音",
       "reading": "かんのん"
      },
      {
       "_id": 93,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区③",
       "region": "鳥羽",
       "reading": "とば"
      },
      {
       "_id": 94,
       "district": "佐原地区",
       "schoolDistrict1": "五中学区",
       "schoolDistrict2": "五中学区③",
       "region": "山之辺",
       "reading": "やまのべ"
      },
      {
       "_id": 95,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "向津",
       "reading": "むかいつはま"
      },
      {
       "_id": 96,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "砂場(佐原二)",
       "reading": "すなば(さわらに)"
      },
      {
       "_id": 97,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "荒川",
       "reading": "あらかわ"
      },
      {
       "_id": 98,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "笄島",
       "reading": "こうがいじま"
      },
      {
       "_id": 99,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "長島(佐原ハ)",
       "reading": "ながしま(さわらは)"
      },
      {
       "_id": 100,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "中洲",
       "reading": "なかす"
      },
      {
       "_id": 101,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "篠原新田",
       "reading": "しのはらにた"
      },
      {
       "_id": 102,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "石納",
       "reading": "こくのう"
      },
      {
       "_id": 103,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区①",
       "region": "野間谷原",
       "reading": "のまやわら"
      },
      {
       "_id": 104,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区②",
       "region": "八筋川",
       "reading": "やすじかわ"
      },
      {
       "_id": 105,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区②",
       "region": "本津",
       "reading": "もとつ"
      },
      {
       "_id": 106,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区②",
       "region": "大島",
       "reading": "おおしま"
      },
      {
       "_id": 107,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区②",
       "region": "三島",
       "reading": "みしま"
      },
      {
       "_id": 108,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区②",
       "region": "境島",
       "reading": "さかいじま"
      },
      {
       "_id": 109,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区②",
       "region": "扇島",
       "reading": "おうぎしま"
      },
      {
       "_id": 110,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区③",
       "region": "与田浦",
       "reading": "よだうら"
      },
      {
       "_id": 111,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区③",
       "region": "加藤洲",
       "reading": "かとうしまざき"
      },
      {
       "_id": 112,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区③",
       "region": "磯山",
       "reading": "いそやま"
      },
      {
       "_id": 113,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区③",
       "region": "市和田",
       "reading": "いちわだ"
      },
      {
       "_id": 114,
       "district": "佐原地区",
       "schoolDistrict1": "新島中学区",
       "schoolDistrict2": "新島中学区③",
       "region": "附洲新田",
       "reading": "つきすしんでん"
      },
      {
       "_id": 115,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖①",
       "region": "賀",
       "reading": "が"
      },
      {
       "_id": 116,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖①",
       "region": "息栖",
       "reading": "いきす"
      },
      {
       "_id": 117,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖①",
       "region": "筒井",
       "reading": "つつい"
      },
      {
       "_id": 118,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原1丁目",
       "reading": "おおのはら1ちょうめ"
      },
      {
       "_id": 119,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原2丁目",
       "reading": "おおのはら2ちょうめ"
      },
      {
       "_id": 120,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原3丁目",
       "reading": "おおのはら3ちょうめ"
      },
      {
       "_id": 121,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原4丁目",
       "reading": "おおのはら4ちょうめ"
      },
      {
       "_id": 122,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原5丁目",
       "reading": "おおのはら5ちょうめ"
      },
      {
       "_id": 123,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原6丁目",
       "reading": "おおのはら6ちょうめ"
      },
      {
       "_id": 124,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原7丁目",
       "reading": "おおのはら7ちょうめ"
      },
      {
       "_id": 125,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原8丁目",
       "reading": "おおのはら8ちょうめ"
      },
      {
       "_id": 126,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原中央1丁目",
       "reading": "おおのはらちゅうおう1ちょうめ"
      },
      {
       "_id": 127,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原中央2丁目",
       "reading": "おおのはらちゅうおう2ちょうめ"
      },
      {
       "_id": 128,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原中央3丁目",
       "reading": "おおのはらちゅうおう3ちょうめ"
      },
      {
       "_id": 129,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原中央4丁目",
       "reading": "おおのはらちゅうおう4ちょうめ"
      },
      {
       "_id": 130,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原中央5丁目",
       "reading": "おおのはらちゅうおう5ちょうめ"
      },
      {
       "_id": 131,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "大野原中央6丁目",
       "reading": "おおのはらちゅうおう6ちょうめ"
      },
      {
       "_id": 132,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖②",
       "region": "木崎",
       "reading": "きざき"
      },
      {
       "_id": 133,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "神栖1丁目",
       "reading": "かみす1ちょうめ"
      },
      {
       "_id": 134,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "神栖2丁目",
       "reading": "かみす2ちょうめ"
      },
      {
       "_id": 135,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "神栖3丁目",
       "reading": "かみす3ちょうめ"
      },
      {
       "_id": 136,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "神栖4丁目",
       "reading": "かみす4ちょうめ"
      },
      {
       "_id": 137,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "平泉",
       "reading": "ひらいずみ"
      },
      {
       "_id": 138,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "平泉東",
       "reading": "ひらいずみひがし"
      },
      {
       "_id": 139,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "深芝",
       "reading": "ふかしば"
      },
      {
       "_id": 140,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "深芝南1丁目",
       "reading": "ふかしばみなみ1ちょうめ"
      },
      {
       "_id": 141,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "深芝南2丁目",
       "reading": "ふかしばみなみ2ちょうめ"
      },
      {
       "_id": 142,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "深芝南3丁目",
       "reading": "ふかしばみなみ3ちょうめ"
      },
      {
       "_id": 143,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "深芝南4丁目",
       "reading": "ふかしばみなみ4ちょうめ"
      },
      {
       "_id": 144,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "深芝南5丁目",
       "reading": "ふかしばみなみ5ちょうめ"
      },
      {
       "_id": 145,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "居切",
       "reading": "いぎり"
      },
      {
       "_id": 146,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "鰐川",
       "reading": "わにがわ"
      },
      {
       "_id": 147,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "下幡木",
       "reading": "しもはたき"
      },
      {
       "_id": 148,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "堀割1丁目",
       "reading": "ほりわり1ちょうめ"
      },
      {
       "_id": 149,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "堀割2丁目",
       "reading": "ほりわり2ちょうめ"
      },
      {
       "_id": 150,
       "district": "神栖地区",
       "schoolDistrict1": "大野原方面",
       "schoolDistrict2": "神栖③",
       "region": "堀割3丁目",
       "reading": "ほりわり3ちょうめ"
      },
      {
       "_id": 151,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "石神",
       "reading": "いしがみ"
      },
      {
       "_id": 152,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "田畑",
       "reading": "たはた"
      },
      {
       "_id": 153,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "高浜",
       "reading": "たかはま"
      },
      {
       "_id": 154,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "溝口",
       "reading": "みぞぐち"
      },
      {
       "_id": 155,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "知手",
       "reading": "しって"
      },
      {
       "_id": 156,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "芝崎",
       "reading": "しばさき"
      },
      {
       "_id": 157,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "萩原",
       "reading": "はぎはら"
      },
      {
       "_id": 158,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "奥野谷",
       "reading": "おくのやなや"
      },
      {
       "_id": 159,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖④",
       "region": "日川",
       "reading": "にっかわ"
      },
      {
       "_id": 160,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手浜",
       "reading": "しってはま"
      },
      {
       "_id": 161,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "日川浜",
       "reading": "にっかわはま"
      },
      {
       "_id": 162,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "南浜",
       "reading": "みなみはま"
      },
      {
       "_id": 163,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "奥野谷浜",
       "reading": "おくのたにはま"
      },
      {
       "_id": 164,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央1丁目",
       "reading": "しってちゅうおう1ちょうめ"
      },
      {
       "_id": 165,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央2丁目",
       "reading": "しってちゅうおう2ちょうめ"
      },
      {
       "_id": 166,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央3丁目",
       "reading": "しってちゅうおう3ちょうめ"
      },
      {
       "_id": 167,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央4丁目",
       "reading": "しってちゅうおう4ちょうめ"
      },
      {
       "_id": 168,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央5丁目",
       "reading": "しってちゅうおう5ちょうめ"
      },
      {
       "_id": 169,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央6丁目",
       "reading": "しってちゅうおう6ちょうめ"
      },
      {
       "_id": 170,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央7丁目",
       "reading": "しってちゅうおう7ちょうめ"
      },
      {
       "_id": 171,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央8丁目",
       "reading": "しってちゅうおう8ちょうめ"
      },
      {
       "_id": 172,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央9丁目",
       "reading": "しってちゅうおう9ちょうめ"
      },
      {
       "_id": 173,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "知手中央10丁目",
       "reading": "しってちゅうおう10ちょうめ"
      },
      {
       "_id": 174,
       "district": "神栖地区",
       "schoolDistrict1": "知手方面",
       "schoolDistrict2": "神栖⑤",
       "region": "横瀬",
       "reading": "よこせ"
      },
      {
       "_id": 175,
       "district": "神栖地区",
       "schoolDistrict1": "波崎方面",
       "schoolDistrict2": "波崎方面",
       "region": "波崎方面",
       "reading": "はさきかたも"
      },
      {
       "_id": 176,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "所",
       "reading": "ところ"
      },
      {
       "_id": 177,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "桜田",
       "reading": "さくらだ"
      },
      {
       "_id": 178,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "掘籠",
       "reading": "ほりごめ"
      },
      {
       "_id": 179,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "村田",
       "reading": "むらた"
      },
      {
       "_id": 180,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "馬乗里",
       "reading": "まじょうり"
      },
      {
       "_id": 181,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "東ノ台",
       "reading": "ひがしのだい"
      },
      {
       "_id": 182,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "大沼",
       "reading": "おおぬま"
      },
      {
       "_id": 183,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "久井崎",
       "reading": "くいざき"
      },
      {
       "_id": 184,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "稲荷山",
       "reading": "いなりやま"
      },
      {
       "_id": 185,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "中野",
       "reading": "なかの"
      },
      {
       "_id": 186,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "津富浦",
       "reading": "つぶうら"
      },
      {
       "_id": 187,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "松子",
       "reading": "まつこ"
      },
      {
       "_id": 188,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "臼作",
       "reading": "うすくり"
      },
      {
       "_id": 189,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区①",
       "region": "吉岡",
       "reading": "よしおか"
      },
      {
       "_id": 190,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "奈土",
       "reading": "など"
      },
      {
       "_id": 191,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "柴田",
       "reading": "しばた"
      },
      {
       "_id": 192,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "伊能",
       "reading": "いのう"
      },
      {
       "_id": 193,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "南敷",
       "reading": "みなみしき"
      },
      {
       "_id": 194,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "横山",
       "reading": "よこやま"
      },
      {
       "_id": 195,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "一坪田",
       "reading": "ひとつぼた"
      },
      {
       "_id": 196,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "前林",
       "reading": "まえばやし"
      },
      {
       "_id": 197,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "大栄十余三",
       "reading": "おおえとよみ"
      },
      {
       "_id": 198,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "官林",
       "reading": "かんばやし"
      },
      {
       "_id": 199,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "新田",
       "reading": "にった"
      },
      {
       "_id": 200,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "水の上",
       "reading": "みずのうえ"
      },
      {
       "_id": 201,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "川上",
       "reading": "かわかみ"
      },
      {
       "_id": 202,
       "district": "大栄地区",
       "schoolDistrict1": "大栄地区",
       "schoolDistrict2": "大栄地区②",
       "region": "多良貝",
       "reading": "たらかい"
      },
      {
       "_id": 203,
       "district": "栗源地区",
       "schoolDistrict1": "栗源地区",
       "schoolDistrict2": "栗源地区",
       "region": "栗源地区",
       "reading": "くりもとちく"
      },
      {
       "_id": 204,
       "district": "神崎地区",
       "schoolDistrict1": "神崎地区",
       "schoolDistrict2": "神崎地区",
       "region": "神崎地区",
       "reading": "かんざきちく"
      },
      {
       "_id": 205,
       "district": "下総地区",
       "schoolDistrict1": "下総地区",
       "schoolDistrict2": "下総地区",
       "region": "下総地区",
       "reading": "しもふさちく"
      },
      {
       "_id": 206,
       "district": "小見川地区",
       "schoolDistrict1": "小見川方面",
       "schoolDistrict2": "小見川方面",
       "region": "一ノ分目",
       "reading": "いちのわけめ"
      }
     ]
  })
})