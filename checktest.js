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
        checked: true,
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
        checked: true,
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
        checked: true,
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
        checked: true,
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
        checked: true,
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
        checked: true,
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
        checked: true,
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
        checked: true,
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
        checked: true,
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
        checked: true,
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

const dataTest = {
  "test": {
    "ID": 1205,
    "Name": "TT - N3CB Cu???i kh??a (m???i)",
    "LevelID": 1739,
    "View": 100,
    "Updated": "2022-08-10 09:45:20",
    "Order": 189,
    "Activity": 1,
    "Code": "tt-n3cb-cuoi-khoa-moi",
    "TotalPoint": 180,
    "PassPoint": 95,
    "TimeOpen": null,
    "TimeEnd": null,
    "Type": 2,
    "Survey": null,
    "created_at": null,
    "updated_at": null,
    "exam_part": [
      {
        "ID": 3007,
        "ExamID": 1205,
        "Name": "T??? v???ng - Ch??? h??n",
        "Code": "tu-vung-chu-han",
        "Time": 30,
        "Point": 60,
        "Order": 728,
        "Updated": "2022-07-27 15:10:14",
        "Activity": 1,
        "mp3": null,
        "free_time": 0,
        "type": 6,
        "SlipPoint": 20,
        "Mp3Temp": null,
        "exam_part2": [
          {
            "ID": 9812,
            "ExamPartID": 3007,
            "Name": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 1,
            "Updated": "2022-07-27 15:13:26",
            "Activity": 1,
            "groups": [
              {
                "ID": 3655,
                "ExamPart2ID": 9812,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-27 15:15:19",
                "Updated": "2022-07-27 15:15:19",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 45977,
                    "ExamGroupID": 3655,
                    "Name": "1.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????<u>??????</u>?????????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:15:30",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161937,
                        "ExamQuestionID": 45977,
                        "Name": "????????????",
                        "Point": 2,
                        "Order": 1,
                        "Updated": "2022-07-27 15:19:38",
                        "MP3": null
                      },
                      {
                        "ID": 161938,
                        "ExamQuestionID": 45977,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:19:42",
                        "MP3": null
                      },
                      {
                        "ID": 161939,
                        "ExamQuestionID": 45977,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:19:47",
                        "MP3": null
                      },
                      {
                        "ID": 161940,
                        "ExamQuestionID": 45977,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:19:51",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45978,
                    "ExamGroupID": 3655,
                    "Name": "2.&nbsp;<span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???????????????<u>??????</u>???????????????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???</span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\r\n&quot;Times New Roman&quot;;mso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:\r\nAR-SA\">???</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:15:38",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161941,
                        "ExamQuestionID": 45978,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:19:57",
                        "MP3": null
                      },
                      {
                        "ID": 161942,
                        "ExamQuestionID": 45978,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:20:01",
                        "MP3": null
                      },
                      {
                        "ID": 161943,
                        "ExamQuestionID": 45978,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:20:06",
                        "MP3": null
                      },
                      {
                        "ID": 161944,
                        "ExamQuestionID": 45978,
                        "Name": "?????????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:20:13",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45979,
                    "ExamGroupID": 3655,
                    "Name": "3.&nbsp;<span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">????????????????????????<u>??????</u>???????????????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:15:45",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161945,
                        "ExamQuestionID": 45979,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:20:26",
                        "MP3": null
                      },
                      {
                        "ID": 161946,
                        "ExamQuestionID": 45979,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:20:28",
                        "MP3": null
                      },
                      {
                        "ID": 161947,
                        "ExamQuestionID": 45979,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:20:33",
                        "MP3": null
                      },
                      {
                        "ID": 161948,
                        "ExamQuestionID": 45979,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:20:38",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45980,
                    "ExamGroupID": 3655,
                    "Name": "4.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????????????????<u>??????</u>??????</span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\r\n&quot;Times New Roman&quot;;mso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:\r\nAR-SA\">???</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:15:55",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161949,
                        "ExamQuestionID": 45980,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:20:48",
                        "MP3": null
                      },
                      {
                        "ID": 161950,
                        "ExamQuestionID": 45980,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:20:52",
                        "MP3": null
                      },
                      {
                        "ID": 161951,
                        "ExamQuestionID": 45980,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:20:55",
                        "MP3": null
                      },
                      {
                        "ID": 161952,
                        "ExamQuestionID": 45980,
                        "Name": "?????????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:21:01",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45981,
                    "ExamGroupID": 3655,
                    "Name": "5.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????????????????????????????<u>??????</u>???????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:17:05",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161953,
                        "ExamQuestionID": 45981,
                        "Name": "????????????",
                        "Point": 2,
                        "Order": 1,
                        "Updated": "2022-07-27 15:23:16",
                        "MP3": null
                      },
                      {
                        "ID": 161954,
                        "ExamQuestionID": 45981,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:23:20",
                        "MP3": null
                      },
                      {
                        "ID": 161955,
                        "ExamQuestionID": 45981,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:23:24",
                        "MP3": null
                      },
                      {
                        "ID": 161956,
                        "ExamQuestionID": 45981,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:23:29",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9813,
            "ExamPartID": 3007,
            "Name": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 2,
            "Updated": "2022-07-27 15:23:50",
            "Activity": 1,
            "groups": [
              {
                "ID": 3656,
                "ExamPart2ID": 9813,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-27 15:24:40",
                "Updated": "2022-07-27 15:24:40",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 45982,
                    "ExamGroupID": 3656,
                    "Name": "<span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">6. ???????????????<u>????????????</u>??????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:25:04",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161965,
                        "ExamQuestionID": 45982,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:27:24",
                        "MP3": null
                      },
                      {
                        "ID": 161966,
                        "ExamQuestionID": 45982,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 15:27:29",
                        "MP3": null
                      },
                      {
                        "ID": 161967,
                        "ExamQuestionID": 45982,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:27:35",
                        "MP3": null
                      },
                      {
                        "ID": 161968,
                        "ExamQuestionID": 45982,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:27:40",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45983,
                    "ExamGroupID": 3656,
                    "Name": "7.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????<u>??????</u>????????????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:25:14",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161969,
                        "ExamQuestionID": 45983,
                        "Name": "???",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:27:46",
                        "MP3": null
                      },
                      {
                        "ID": 161970,
                        "ExamQuestionID": 45983,
                        "Name": "???",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 15:27:53",
                        "MP3": null
                      },
                      {
                        "ID": 161971,
                        "ExamQuestionID": 45983,
                        "Name": "???",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:27:59",
                        "MP3": null
                      },
                      {
                        "ID": 161972,
                        "ExamQuestionID": 45983,
                        "Name": "???",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:28:04",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45984,
                    "ExamGroupID": 3656,
                    "Name": "8.&nbsp;<span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???????????????<u>?????????</u>??????????????????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:25:28",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161973,
                        "ExamQuestionID": 45984,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:28:11",
                        "MP3": null
                      },
                      {
                        "ID": 161974,
                        "ExamQuestionID": 45984,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 15:28:16",
                        "MP3": null
                      },
                      {
                        "ID": 161975,
                        "ExamQuestionID": 45984,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:28:25",
                        "MP3": null
                      },
                      {
                        "ID": 161976,
                        "ExamQuestionID": 45984,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:28:30",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45985,
                    "ExamGroupID": 3656,
                    "Name": "9.&nbsp;<span lang=\"JA\" style=\"text-indent: -18pt; color: inherit; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif;\">???????????????<u>?????????</u>????????????</span><p class=\"MsoListParagraph\" style=\"margin-left:27.0pt;mso-add-space:auto;\r\ntext-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1;tab-stops:14.2pt 1.0cm 5.0cm 9.0cm 13.0cm\"><span style=\"font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-bidi-font-family:&quot;Times New Roman&quot;\"><o:p></o:p></span></p>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:25:45",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161961,
                        "ExamQuestionID": 45985,
                        "Name": "???",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:26:47",
                        "MP3": null
                      },
                      {
                        "ID": 161962,
                        "ExamQuestionID": 45985,
                        "Name": "???",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:26:59",
                        "MP3": null
                      },
                      {
                        "ID": 161963,
                        "ExamQuestionID": 45985,
                        "Name": "???",
                        "Point": 2,
                        "Order": 3,
                        "Updated": "2022-07-27 15:27:10",
                        "MP3": null
                      },
                      {
                        "ID": 161964,
                        "ExamQuestionID": 45985,
                        "Name": "???",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:27:17",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45986,
                    "ExamGroupID": 3656,
                    "Name": "<font color=\"#222222\">10.&nbsp;</font><span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">??????????????????<u>?????????</u>???</span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:25:56",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161957,
                        "ExamQuestionID": 45986,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:26:16",
                        "MP3": null
                      },
                      {
                        "ID": 161958,
                        "ExamQuestionID": 45986,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:26:21",
                        "MP3": null
                      },
                      {
                        "ID": 161959,
                        "ExamQuestionID": 45986,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:26:27",
                        "MP3": null
                      },
                      {
                        "ID": 161960,
                        "ExamQuestionID": 45986,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:26:35",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9814,
            "ExamPartID": 3007,
            "Name": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 3,
            "Updated": "2022-07-27 15:28:59",
            "Activity": 1,
            "groups": [
              {
                "ID": 3657,
                "ExamPart2ID": 9814,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-27 15:29:57",
                "Updated": "2022-07-27 15:29:57",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 45987,
                    "ExamGroupID": 3657,
                    "Name": "11.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????????????????????????????????????????????????????????????????</span><span lang=\"VI\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA\"><ruby><span lang=\"JA\">??????</span><rp>(</rp><rt style=\"font-size:6.0pt;layout-grid-mode:line\">????????????</rt><rp>)</rp></ruby></span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA\">??????????????????????????????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:30:16",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161977,
                        "ExamQuestionID": 45987,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:31:28",
                        "MP3": null
                      },
                      {
                        "ID": 161978,
                        "ExamQuestionID": 45987,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 15:31:36",
                        "MP3": null
                      },
                      {
                        "ID": 161979,
                        "ExamQuestionID": 45987,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:31:41",
                        "MP3": null
                      },
                      {
                        "ID": 161980,
                        "ExamQuestionID": 45987,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:31:52",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45988,
                    "ExamGroupID": 3657,
                    "Name": "12.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">?????????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:30:26",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161981,
                        "ExamQuestionID": 45988,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:32:11",
                        "MP3": null
                      },
                      {
                        "ID": 161982,
                        "ExamQuestionID": 45988,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:39:23",
                        "MP3": null
                      },
                      {
                        "ID": 161983,
                        "ExamQuestionID": 45988,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:39:36",
                        "MP3": null
                      },
                      {
                        "ID": 161984,
                        "ExamQuestionID": 45988,
                        "Name": "???????????????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:39:42",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45989,
                    "ExamGroupID": 3657,
                    "Name": "13.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:30:37",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161985,
                        "ExamQuestionID": 45989,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:39:50",
                        "MP3": null
                      },
                      {
                        "ID": 161986,
                        "ExamQuestionID": 45989,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:39:54",
                        "MP3": null
                      },
                      {
                        "ID": 161987,
                        "ExamQuestionID": 45989,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 3,
                        "Updated": "2022-07-27 15:40:00",
                        "MP3": null
                      },
                      {
                        "ID": 161988,
                        "ExamQuestionID": 45989,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:40:05",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45990,
                    "ExamGroupID": 3657,
                    "Name": "14.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">?????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:30:45",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161989,
                        "ExamQuestionID": 45990,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:40:23",
                        "MP3": null
                      },
                      {
                        "ID": 161990,
                        "ExamQuestionID": 45990,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:40:26",
                        "MP3": null
                      },
                      {
                        "ID": 161991,
                        "ExamQuestionID": 45990,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:40:31",
                        "MP3": null
                      },
                      {
                        "ID": 161992,
                        "ExamQuestionID": 45990,
                        "Name": "???????????????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:40:39",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45991,
                    "ExamGroupID": 3657,
                    "Name": "15.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">??????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:32:04",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161993,
                        "ExamQuestionID": 45991,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:40:50",
                        "MP3": null
                      },
                      {
                        "ID": 161994,
                        "ExamQuestionID": 45991,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:40:54",
                        "MP3": null
                      },
                      {
                        "ID": 161995,
                        "ExamQuestionID": 45991,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:40:57",
                        "MP3": null
                      },
                      {
                        "ID": 161996,
                        "ExamQuestionID": 45991,
                        "Name": "????????????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:41:04",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9815,
            "ExamPartID": 3007,
            "Name": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 4,
            "Updated": "2022-07-27 15:41:14",
            "Activity": 1,
            "groups": [
              {
                "ID": 3658,
                "ExamPart2ID": 9815,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-27 15:41:21",
                "Updated": "2022-07-27 15:41:21",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 45992,
                    "ExamGroupID": 3658,
                    "Name": "16.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????<u>??????</u>??????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:42:02",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 161997,
                        "ExamQuestionID": 45992,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:46:30",
                        "MP3": null
                      },
                      {
                        "ID": 161998,
                        "ExamQuestionID": 45992,
                        "Name": "?????????????????????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 15:46:35",
                        "MP3": null
                      },
                      {
                        "ID": 161999,
                        "ExamQuestionID": 45992,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:46:40",
                        "MP3": null
                      },
                      {
                        "ID": 162000,
                        "ExamQuestionID": 45992,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:46:44",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45993,
                    "ExamGroupID": 3658,
                    "Name": "17.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">??????????????????<u>???????????????</u>???????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:42:14",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162001,
                        "ExamQuestionID": 45993,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:46:54",
                        "MP3": null
                      },
                      {
                        "ID": 162002,
                        "ExamQuestionID": 45993,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:46:59",
                        "MP3": null
                      },
                      {
                        "ID": 162003,
                        "ExamQuestionID": 45993,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:47:04",
                        "MP3": null
                      },
                      {
                        "ID": 162004,
                        "ExamQuestionID": 45993,
                        "Name": "??????????????????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 15:47:09",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45994,
                    "ExamGroupID": 3658,
                    "Name": "18.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????????????????????????????<u>???</u></span><u><span lang=\"VI\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA\"><u><span lang=\"JA\" style=\"font-size:12.0pt\">??????</span></u></span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????</span></u>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:43:05",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162005,
                        "ExamQuestionID": 45994,
                        "Name": "??????????????????",
                        "Point": 2,
                        "Order": 1,
                        "Updated": "2022-07-27 15:50:41",
                        "MP3": null
                      },
                      {
                        "ID": 162006,
                        "ExamQuestionID": 45994,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:47:43",
                        "MP3": null
                      },
                      {
                        "ID": 162007,
                        "ExamQuestionID": 45994,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:50:44",
                        "MP3": null
                      },
                      {
                        "ID": 162008,
                        "ExamQuestionID": 45994,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:51:10",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45995,
                    "ExamGroupID": 3658,
                    "Name": "19.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????<u>???????????????????????????</u>?????????</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:43:34",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162009,
                        "ExamQuestionID": 45995,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:51:36",
                        "MP3": null
                      },
                      {
                        "ID": 162010,
                        "ExamQuestionID": 45995,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 15:51:39",
                        "MP3": null
                      },
                      {
                        "ID": 162011,
                        "ExamQuestionID": 45995,
                        "Name": "???????????????",
                        "Point": 2,
                        "Order": 3,
                        "Updated": "2022-07-27 15:51:45",
                        "MP3": null
                      },
                      {
                        "ID": 162012,
                        "ExamQuestionID": 45995,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:51:50",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45996,
                    "ExamGroupID": 3658,
                    "Name": "20.&nbsp;<span lang=\"VI\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\"><ruby><span lang=\"JA\">??????</span><rp>(</rp><rt style=\"font-size:6.0pt;layout-grid-mode:line\">????????????</rt><rp>)</rp></ruby><span lang=\"JA\" style=\"font-size:12.0pt\">?????????????????????<u>??????????????????</u>???</span></span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:43:42",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162013,
                        "ExamQuestionID": 45996,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 15:55:14",
                        "MP3": null
                      },
                      {
                        "ID": 162014,
                        "ExamQuestionID": 45996,
                        "Name": "???????????????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 15:55:23",
                        "MP3": null
                      },
                      {
                        "ID": 162015,
                        "ExamQuestionID": 45996,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 15:55:33",
                        "MP3": null
                      },
                      {
                        "ID": 162016,
                        "ExamQuestionID": 45996,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 15:55:39",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9816,
            "ExamPartID": 3007,
            "Name": "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 5,
            "Updated": "2022-07-27 15:56:17",
            "Activity": 1,
            "groups": [
              {
                "ID": 3660,
                "ExamPart2ID": 9816,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-27 15:56:23",
                "Updated": "2022-07-27 15:56:23",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 45997,
                    "ExamGroupID": 3660,
                    "Name": "21.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">??????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:56:49",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162017,
                        "ExamQuestionID": 45997,
                        "Name": "??????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:03:13",
                        "MP3": null
                      },
                      {
                        "ID": 162018,
                        "ExamQuestionID": 45997,
                        "Name": "???????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:03:18",
                        "MP3": null
                      },
                      {
                        "ID": 162019,
                        "ExamQuestionID": 45997,
                        "Name": "????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:03:26",
                        "MP3": null
                      },
                      {
                        "ID": 162020,
                        "ExamQuestionID": 45997,
                        "Name": "??????????????????????????????????????????????????????????????????",
                        "Point": 4,
                        "Order": 4,
                        "Updated": "2022-07-27 16:03:35",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45998,
                    "ExamGroupID": 3660,
                    "Name": "22.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">?????????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:56:58",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162021,
                        "ExamQuestionID": 45998,
                        "Name": "?????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:03:49",
                        "MP3": null
                      },
                      {
                        "ID": 162022,
                        "ExamQuestionID": 45998,
                        "Name": "???????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:03:54",
                        "MP3": null
                      },
                      {
                        "ID": 162023,
                        "ExamQuestionID": 45998,
                        "Name": "???????????????????????????????????????????????????????????????????????????",
                        "Point": 4,
                        "Order": 3,
                        "Updated": "2022-07-27 16:04:00",
                        "MP3": null
                      },
                      {
                        "ID": 162024,
                        "ExamQuestionID": 45998,
                        "Name": "??????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:04:06",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 45999,
                    "ExamGroupID": 3660,
                    "Name": "23.&nbsp;<span lang=\"JA\" style=\"text-indent: -18pt; color: inherit; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif;\">????????????</span><p class=\"MsoListParagraph\" style=\"margin-left:27.0pt;mso-add-space:auto;\r\ntext-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1;tab-stops:14.2pt 1.0cm 5.0cm 9.0cm 13.0cm\"><span style=\"font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;\"><o:p></o:p></span></p>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:57:22",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162025,
                        "ExamQuestionID": 45999,
                        "Name": "?????????1??????????????????????????????",
                        "Point": 4,
                        "Order": 1,
                        "Updated": "2022-07-27 16:04:25",
                        "MP3": null
                      },
                      {
                        "ID": 162026,
                        "ExamQuestionID": 45999,
                        "Name": "????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:04:30",
                        "MP3": null
                      },
                      {
                        "ID": 162027,
                        "ExamQuestionID": 45999,
                        "Name": "??????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:04:35",
                        "MP3": null
                      },
                      {
                        "ID": 162028,
                        "ExamQuestionID": 45999,
                        "Name": "????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:04:40",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46000,
                    "ExamGroupID": 3660,
                    "Name": "24.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">???????????????</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:57:27",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162029,
                        "ExamQuestionID": 46000,
                        "Name": "???????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:04:51",
                        "MP3": null
                      },
                      {
                        "ID": 162030,
                        "ExamQuestionID": 46000,
                        "Name": "????????????????????????????????????????????????????????????",
                        "Point": 4,
                        "Order": 2,
                        "Updated": "2022-07-27 16:04:58",
                        "MP3": null
                      },
                      {
                        "ID": 162031,
                        "ExamQuestionID": 46000,
                        "Name": "?????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:05:06",
                        "MP3": null
                      },
                      {
                        "ID": 162032,
                        "ExamQuestionID": 46000,
                        "Name": "?????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:05:15",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46001,
                    "ExamGroupID": 3660,
                    "Name": "25.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">?????????</span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 15:57:35",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162033,
                        "ExamQuestionID": 46001,
                        "Name": "????????????????????????????????????A????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:05:29",
                        "MP3": null
                      },
                      {
                        "ID": 162034,
                        "ExamQuestionID": 46001,
                        "Name": "??????????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:05:34",
                        "MP3": null
                      },
                      {
                        "ID": 162035,
                        "ExamQuestionID": 46001,
                        "Name": "???????????????????????????????????????????????????????????????",
                        "Point": 4,
                        "Order": 3,
                        "Updated": "2022-07-27 16:05:48",
                        "MP3": null
                      },
                      {
                        "ID": 162036,
                        "ExamQuestionID": 46001,
                        "Name": "??????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:05:44",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "ID": 3008,
        "ExamID": 1205,
        "Name": "Ng??? ph??p - ?????c hi???u",
        "Code": "ngu-phap-doc-hieu",
        "Time": 45,
        "Point": 90,
        "Order": 729,
        "Updated": "2022-07-27 15:10:55",
        "Activity": 1,
        "mp3": null,
        "free_time": 0,
        "type": 8,
        "SlipPoint": 30,
        "Mp3Temp": null,
        "exam_part2": [
          {
            "ID": 9817,
            "ExamPartID": 3008,
            "Name": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 1,
            "Updated": "2022-07-27 16:09:32",
            "Activity": 1,
            "groups": [
              {
                "ID": 3661,
                "ExamPart2ID": 9817,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-27 16:09:37",
                "Updated": "2022-07-27 16:09:37",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46002,
                    "ExamGroupID": 3661,
                    "Name": "26.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????????????????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:13:02",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162037,
                        "ExamQuestionID": 46002,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:20:14",
                        "MP3": null
                      },
                      {
                        "ID": 162038,
                        "ExamQuestionID": 46002,
                        "Name": "?????????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 16:20:39",
                        "MP3": null
                      },
                      {
                        "ID": 162039,
                        "ExamQuestionID": 46002,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:25:06",
                        "MP3": null
                      },
                      {
                        "ID": 162040,
                        "ExamQuestionID": 46002,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:25:12",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46003,
                    "ExamGroupID": 3661,
                    "Name": "27.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">?????????????????????????????????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:13:13",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162041,
                        "ExamQuestionID": 46003,
                        "Name": "????????????",
                        "Point": 2,
                        "Order": 1,
                        "Updated": "2022-07-27 16:25:22",
                        "MP3": null
                      },
                      {
                        "ID": 162042,
                        "ExamQuestionID": 46003,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:25:28",
                        "MP3": null
                      },
                      {
                        "ID": 162043,
                        "ExamQuestionID": 46003,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:25:32",
                        "MP3": null
                      },
                      {
                        "ID": 162044,
                        "ExamQuestionID": 46003,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:25:36",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46004,
                    "ExamGroupID": 3661,
                    "Name": "28.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\r\nminor-latin;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-ansi-language:EN-US;\r\nmso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:14:08",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162045,
                        "ExamQuestionID": 46004,
                        "Name": "???????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:25:48",
                        "MP3": null
                      },
                      {
                        "ID": 162046,
                        "ExamQuestionID": 46004,
                        "Name": "??????????????????????????????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 16:25:55",
                        "MP3": null
                      },
                      {
                        "ID": 162047,
                        "ExamQuestionID": 46004,
                        "Name": "?????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:26:00",
                        "MP3": null
                      },
                      {
                        "ID": 162048,
                        "ExamQuestionID": 46004,
                        "Name": "???????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:26:05",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46005,
                    "ExamGroupID": 3661,
                    "Name": "29.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:14:18",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162049,
                        "ExamQuestionID": 46005,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:26:12",
                        "MP3": null
                      },
                      {
                        "ID": 162050,
                        "ExamQuestionID": 46005,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:26:15",
                        "MP3": null
                      },
                      {
                        "ID": 162051,
                        "ExamQuestionID": 46005,
                        "Name": "????????????",
                        "Point": 2,
                        "Order": 3,
                        "Updated": "2022-07-27 16:26:20",
                        "MP3": null
                      },
                      {
                        "ID": 162052,
                        "ExamQuestionID": 46005,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:26:25",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46006,
                    "ExamGroupID": 3661,
                    "Name": "30.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">??????</span><span lang=\"VI\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA\">C</span><span style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:\r\n&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;\r\nmso-fareast-language:JA;mso-bidi-language:AR-SA\">D</span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;mso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:\r\nAR-SA\">??????</span><span style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA\">1970</span><span lang=\"JA\" style=\"font-size:12.0pt;\r\nfont-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????</span><span style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;mso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:\r\nAR-SA\">80</span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA\">?????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:14:30",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162053,
                        "ExamQuestionID": 46006,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:26:38",
                        "MP3": null
                      },
                      {
                        "ID": 162054,
                        "ExamQuestionID": 46006,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:26:42",
                        "MP3": null
                      },
                      {
                        "ID": 162055,
                        "ExamQuestionID": 46006,
                        "Name": "?????????",
                        "Point": 2,
                        "Order": 3,
                        "Updated": "2022-07-27 16:26:48",
                        "MP3": null
                      },
                      {
                        "ID": 162056,
                        "ExamQuestionID": 46006,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:26:55",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46007,
                    "ExamGroupID": 3661,
                    "Name": "31.&nbsp;<span lang=\"VI\" style=\"text-indent: -18pt; color: inherit; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif;\"><ruby><span lang=\"JA\">??????</span><rt style=\"font-size:6.0pt;layout-grid-mode:line\">?????????</rt></ruby><span lang=\"JA\" style=\"font-size:12.0pt;line-height:150%\">?????????????????????????????????????????????????????????????????? ??????</span></span><p class=\"MsoListParagraph\" style=\"margin-left:27.0pt;mso-add-space:auto;\r\ntext-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1;tab-stops:14.2pt 1.0cm 5.0cm 9.0cm 13.0cm\"><span style=\"font-size:12.0pt;line-height:150%;mso-fareast-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;\"><o:p></o:p></span></p>",
                    "Point": null,
                    "Order": 6,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:15:37",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162057,
                        "ExamQuestionID": 46007,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:29:55",
                        "MP3": null
                      },
                      {
                        "ID": 162058,
                        "ExamQuestionID": 46007,
                        "Name": "??????????????????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 16:30:25",
                        "MP3": null
                      },
                      {
                        "ID": 162059,
                        "ExamQuestionID": 46007,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:30:28",
                        "MP3": null
                      },
                      {
                        "ID": 162060,
                        "ExamQuestionID": 46007,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:33:13",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46008,
                    "ExamGroupID": 3661,
                    "Name": "32.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???????????????</span><span lang=\"VI\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA\"><ruby><span lang=\"JA\">??????</span><rp>(</rp><rt style=\"font-size:6.0pt;layout-grid-mode:line\">????????????</rt><rp>)</rp></ruby><span lang=\"JA\" style=\"font-size:12.0pt\">???????????????????????????????????????????????????</span></span>",
                    "Point": null,
                    "Order": 7,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:15:48",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162061,
                        "ExamQuestionID": 46008,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 1,
                        "Updated": "2022-07-27 16:33:21",
                        "MP3": null
                      },
                      {
                        "ID": 162062,
                        "ExamQuestionID": 46008,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:33:25",
                        "MP3": null
                      },
                      {
                        "ID": 162063,
                        "ExamQuestionID": 46008,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:33:28",
                        "MP3": null
                      },
                      {
                        "ID": 162064,
                        "ExamQuestionID": 46008,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:33:31",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46009,
                    "ExamGroupID": 3661,
                    "Name": "33.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 8,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:15:58",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162065,
                        "ExamQuestionID": 46009,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:35:17",
                        "MP3": null
                      },
                      {
                        "ID": 162066,
                        "ExamQuestionID": 46009,
                        "Name": "??????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 16:35:23",
                        "MP3": null
                      },
                      {
                        "ID": 162067,
                        "ExamQuestionID": 46009,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:35:26",
                        "MP3": null
                      },
                      {
                        "ID": 162068,
                        "ExamQuestionID": 46009,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:35:30",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46010,
                    "ExamGroupID": 3661,
                    "Name": "34.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">?????????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 9,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:16:12",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162069,
                        "ExamQuestionID": 46010,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:35:38",
                        "MP3": null
                      },
                      {
                        "ID": 162070,
                        "ExamQuestionID": 46010,
                        "Name": "???????????????",
                        "Point": 2,
                        "Order": 2,
                        "Updated": "2022-07-27 16:35:43",
                        "MP3": null
                      },
                      {
                        "ID": 162071,
                        "ExamQuestionID": 46010,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:35:48",
                        "MP3": null
                      },
                      {
                        "ID": 162072,
                        "ExamQuestionID": 46010,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:35:53",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46012,
                    "ExamGroupID": 3661,
                    "Name": "35.&nbsp;<span lang=\"JA\" style=\"text-indent: -18pt; color: inherit; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif;\">???????????????????????????????????????????????????????????????????????????????????????</span><p class=\"MsoListParagraph\" style=\"margin-left:27.0pt;mso-add-space:auto;\r\ntext-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1;tab-stops:14.2pt 1.0cm 5.0cm 9.0cm 13.0cm\"><span lang=\"VI\" style=\"font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-ansi-language:VI\"><o:p></o:p></span></p>",
                    "Point": null,
                    "Order": 10,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:16:49",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162073,
                        "ExamQuestionID": 46012,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:36:03",
                        "MP3": null
                      },
                      {
                        "ID": 162074,
                        "ExamQuestionID": 46012,
                        "Name": "????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:36:08",
                        "MP3": null
                      },
                      {
                        "ID": 162075,
                        "ExamQuestionID": 46012,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:36:11",
                        "MP3": null
                      },
                      {
                        "ID": 162076,
                        "ExamQuestionID": 46012,
                        "Name": "????????????????????????",
                        "Point": 2,
                        "Order": 4,
                        "Updated": "2022-07-27 16:36:18",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9818,
            "ExamPartID": 3008,
            "Name": "????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 2,
            "Updated": "2022-07-27 16:36:48",
            "Activity": 1,
            "groups": [
              {
                "ID": 3669,
                "ExamPart2ID": 9818,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-27 16:36:52",
                "Updated": "2022-07-27 16:36:52",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46013,
                    "ExamGroupID": 3669,
                    "Name": "36.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????????????????????????????????????????</span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA\">???????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:40:32",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162077,
                        "ExamQuestionID": 46013,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:47:13",
                        "MP3": null
                      },
                      {
                        "ID": 162078,
                        "ExamQuestionID": 46013,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:47:21",
                        "MP3": null
                      },
                      {
                        "ID": 162079,
                        "ExamQuestionID": 46013,
                        "Name": "??????",
                        "Point": 4,
                        "Order": 3,
                        "Updated": "2022-07-27 16:47:29",
                        "MP3": null
                      },
                      {
                        "ID": 162080,
                        "ExamQuestionID": 46013,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:47:34",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46014,
                    "ExamGroupID": 3669,
                    "Name": "37.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????? ????????????????????????????????????</span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA\">??????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:41:36",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162081,
                        "ExamQuestionID": 46014,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:47:45",
                        "MP3": null
                      },
                      {
                        "ID": 162082,
                        "ExamQuestionID": 46014,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:47:49",
                        "MP3": null
                      },
                      {
                        "ID": 162083,
                        "ExamQuestionID": 46014,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:47:52",
                        "MP3": null
                      },
                      {
                        "ID": 162084,
                        "ExamQuestionID": 46014,
                        "Name": "?????????",
                        "Point": 4,
                        "Order": 4,
                        "Updated": "2022-07-27 16:48:06",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46015,
                    "ExamGroupID": 3669,
                    "Name": "38.&nbsp;<span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\"><span style=\"color: rgb(51, 51, 51);\">???????????????????????????????????????</span>??????????????????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:42:46",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162085,
                        "ExamQuestionID": 46015,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:48:53",
                        "MP3": null
                      },
                      {
                        "ID": 162086,
                        "ExamQuestionID": 46015,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:48:58",
                        "MP3": null
                      },
                      {
                        "ID": 162087,
                        "ExamQuestionID": 46015,
                        "Name": "???????????????",
                        "Point": 4,
                        "Order": 3,
                        "Updated": "2022-07-27 16:49:03",
                        "MP3": null
                      },
                      {
                        "ID": 162088,
                        "ExamQuestionID": 46015,
                        "Name": "?????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:49:07",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46016,
                    "ExamGroupID": 3669,
                    "Name": "39.&nbsp;<span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???????????????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???</span><span style=\"font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; font-size: 16px;\">????????????????????????????????????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">??????????????????</span><span lang=\"JA\" style=\"font-size: 12pt; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">???</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:46:04",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162089,
                        "ExamQuestionID": 46016,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:49:43",
                        "MP3": null
                      },
                      {
                        "ID": 162090,
                        "ExamQuestionID": 46016,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 16:49:47",
                        "MP3": null
                      },
                      {
                        "ID": 162091,
                        "ExamQuestionID": 46016,
                        "Name": "????????????",
                        "Point": 4,
                        "Order": 3,
                        "Updated": "2022-07-27 16:49:55",
                        "MP3": null
                      },
                      {
                        "ID": 162092,
                        "ExamQuestionID": 46016,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:50:06",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46017,
                    "ExamGroupID": 3669,
                    "Name": "40.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????????????????</span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA\">????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:46:37",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162093,
                        "ExamQuestionID": 46017,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 16:51:12",
                        "MP3": null
                      },
                      {
                        "ID": 162094,
                        "ExamQuestionID": 46017,
                        "Name": "????????????",
                        "Point": 4,
                        "Order": 2,
                        "Updated": "2022-07-28 08:48:19",
                        "MP3": null
                      },
                      {
                        "ID": 162095,
                        "ExamQuestionID": 46017,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 16:51:21",
                        "MP3": null
                      },
                      {
                        "ID": 162096,
                        "ExamQuestionID": 46017,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 16:51:25",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9819,
            "ExamPartID": 3008,
            "Name": "????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 3,
            "Updated": "2022-07-27 16:56:15",
            "Activity": 1,
            "groups": [
              {
                "ID": 3670,
                "ExamPart2ID": 9819,
                "Content": "&nbsp;",
                "Image": "Data/upload/files/mod-exam-group/1658917445_1144400_f8281c0762f3e60ed8578b643ebba00d.png",
                "Order": 1,
                "Created": "2022-07-27 16:57:23",
                "Updated": "2022-07-27 17:24:05",
                "Mp3": null,
                "ImageTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-group/1658917445_1144400_f8281c0762f3e60ed8578b643ebba00d.png",
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46018,
                    "ExamGroupID": 3670,
                    "Name": "41.&nbsp;",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:57:32",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162097,
                        "ExamQuestionID": 46018,
                        "Name": "????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 17:08:12",
                        "MP3": null
                      },
                      {
                        "ID": 162098,
                        "ExamQuestionID": 46018,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 17:08:16",
                        "MP3": null
                      },
                      {
                        "ID": 162099,
                        "ExamQuestionID": 46018,
                        "Name": "?????????????????????",
                        "Point": 4,
                        "Order": 3,
                        "Updated": "2022-07-27 17:08:26",
                        "MP3": null
                      },
                      {
                        "ID": 162100,
                        "ExamQuestionID": 46018,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 17:08:32",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46019,
                    "ExamGroupID": 3670,
                    "Name": "42.&nbsp;",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:57:37",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162101,
                        "ExamQuestionID": 46019,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 17:08:44",
                        "MP3": null
                      },
                      {
                        "ID": 162102,
                        "ExamQuestionID": 46019,
                        "Name": "????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 17:08:50",
                        "MP3": null
                      },
                      {
                        "ID": 162103,
                        "ExamQuestionID": 46019,
                        "Name": "????????????????????????????????????",
                        "Point": 4,
                        "Order": 3,
                        "Updated": "2022-07-27 17:09:00",
                        "MP3": null
                      },
                      {
                        "ID": 162104,
                        "ExamQuestionID": 46019,
                        "Name": "???????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 17:09:05",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46020,
                    "ExamGroupID": 3670,
                    "Name": "43.&nbsp;",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:57:42",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162105,
                        "ExamQuestionID": 46020,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 17:09:10",
                        "MP3": null
                      },
                      {
                        "ID": 162106,
                        "ExamQuestionID": 46020,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 17:09:13",
                        "MP3": null
                      },
                      {
                        "ID": 162107,
                        "ExamQuestionID": 46020,
                        "Name": "??????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 17:09:16",
                        "MP3": null
                      },
                      {
                        "ID": 162108,
                        "ExamQuestionID": 46020,
                        "Name": "??????",
                        "Point": 4,
                        "Order": 4,
                        "Updated": "2022-07-27 17:09:25",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46021,
                    "ExamGroupID": 3670,
                    "Name": "44.&nbsp;",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:57:46",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162109,
                        "ExamQuestionID": 46021,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 17:09:40",
                        "MP3": null
                      },
                      {
                        "ID": 162110,
                        "ExamQuestionID": 46021,
                        "Name": "???????????????",
                        "Point": 4,
                        "Order": 2,
                        "Updated": "2022-07-27 17:09:45",
                        "MP3": null
                      },
                      {
                        "ID": 162111,
                        "ExamQuestionID": 46021,
                        "Name": "????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 17:10:27",
                        "MP3": null
                      },
                      {
                        "ID": 162112,
                        "ExamQuestionID": 46021,
                        "Name": "??????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 17:10:32",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46022,
                    "ExamGroupID": 3670,
                    "Name": "45.&nbsp;",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 16:57:49",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162113,
                        "ExamQuestionID": 46022,
                        "Name": "???????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-27 17:10:39",
                        "MP3": null
                      },
                      {
                        "ID": 162114,
                        "ExamQuestionID": 46022,
                        "Name": "?????????????????????",
                        "Point": 4,
                        "Order": 2,
                        "Updated": "2022-07-27 17:10:45",
                        "MP3": null
                      },
                      {
                        "ID": 162115,
                        "ExamQuestionID": 46022,
                        "Name": "??????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 17:10:50",
                        "MP3": null
                      },
                      {
                        "ID": 162116,
                        "ExamQuestionID": 46022,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 17:10:54",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9820,
            "ExamPartID": 3008,
            "Name": "????????????4 : ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 4,
            "Updated": "2022-07-27 17:28:56",
            "Activity": 1,
            "groups": [
              {
                "ID": 3671,
                "ExamPart2ID": 9820,
                "Content": "&nbsp;",
                "Image": "Data/upload/files/mod-exam-group/1658917789_6050168_41e0704c700283a6a911b9e26c36542d.png",
                "Order": 1,
                "Created": "2022-07-27 17:29:49",
                "Updated": "2022-07-27 17:29:49",
                "Mp3": null,
                "ImageTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-group/1658917789_6050168_41e0704c700283a6a911b9e26c36542d.png",
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46023,
                    "ExamGroupID": 3671,
                    "Name": "46.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">?????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-27 17:31:39",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162117,
                        "ExamQuestionID": 46023,
                        "Name": "?????????????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 1,
                        "Updated": "2022-07-27 17:32:06",
                        "MP3": null
                      },
                      {
                        "ID": 162118,
                        "ExamQuestionID": 46023,
                        "Name": "???????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-27 17:32:18",
                        "MP3": null
                      },
                      {
                        "ID": 162119,
                        "ExamQuestionID": 46023,
                        "Name": "?????????????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-27 17:33:37",
                        "MP3": null
                      },
                      {
                        "ID": 162120,
                        "ExamQuestionID": 46023,
                        "Name": "??????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-27 17:33:42",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9821,
            "ExamPartID": 3008,
            "Name": "????????????5 : ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 5,
            "Updated": "2022-07-28 08:28:50",
            "Activity": 1,
            "groups": [
              {
                "ID": 3672,
                "ExamPart2ID": 9821,
                "Content": "&nbsp;",
                "Image": "Data/upload/files/mod-exam-group/1658971763_8364368_b2bc07a04ea4afefcfcef14381ce55da.png",
                "Order": 1,
                "Created": "2022-07-28 08:29:23",
                "Updated": "2022-07-28 08:29:23",
                "Mp3": null,
                "ImageTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-group/1658971763_8364368_b2bc07a04ea4afefcfcef14381ce55da.png",
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46024,
                    "ExamGroupID": 3672,
                    "Name": "47.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">????????????????????????</span><span lang=\"VI\" style=\"font-size:12.0pt;\r\nfont-family:&quot;Cambria Math&quot;,serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:\r\nminor-latin;mso-fareast-font-family:&quot;Yu Mincho&quot;;mso-fareast-theme-font:minor-fareast;\r\nmso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\r\n&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;\r\nmso-fareast-language:JA;mso-bidi-language:AR-SA;mso-char-type:symbol-ext;\r\nmso-symbol-font-family:&quot;Cambria Math&quot;\">???</span><u><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">??????????????????</span></u><span lang=\"JA\" style=\"font-size:\r\n12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">?????????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:29:37",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162121,
                        "ExamQuestionID": 46024,
                        "Name": "??????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 08:31:43",
                        "MP3": null
                      },
                      {
                        "ID": 162122,
                        "ExamQuestionID": 46024,
                        "Name": "????????????????????????????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 2,
                        "Updated": "2022-07-28 08:31:54",
                        "MP3": null
                      },
                      {
                        "ID": 162123,
                        "ExamQuestionID": 46024,
                        "Name": "????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:31:59",
                        "MP3": null
                      },
                      {
                        "ID": 162124,
                        "ExamQuestionID": 46024,
                        "Name": "??????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:32:04",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46025,
                    "ExamGroupID": 3672,
                    "Name": "48.&nbsp;<span lang=\"VI\" style=\"text-indent: -18pt; color: inherit; font-family: &quot;Cambria Math&quot;, serif;\">???</span><u style=\"text-indent: -18pt; color: inherit; font-family: inherit;\"><span lang=\"JA\" style=\"font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-ansi-language:VI;mso-bidi-font-weight:\r\nbold\">???????????????????????????</span></u><span lang=\"JA\" style=\"text-indent: -18pt; color: inherit; font-family: &quot;UD Digi Kyokasho N-R&quot;, serif;\">???????????????????????????</span><p class=\"MsoListParagraph\" style=\"text-indent:-18.0pt;line-height:150%;\r\nmso-list:l0 level1 lfo1;tab-stops:1.0cm 5.0cm 9.0cm 13.0cm\"><span style=\"font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Calibri Light&quot;;\r\nmso-bidi-theme-font:major-latin\"><o:p></o:p></span></p>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:29:51",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162125,
                        "ExamQuestionID": 46025,
                        "Name": "???????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 1,
                        "Updated": "2022-07-28 08:32:12",
                        "MP3": null
                      },
                      {
                        "ID": 162126,
                        "ExamQuestionID": 46025,
                        "Name": "?????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:32:19",
                        "MP3": null
                      },
                      {
                        "ID": 162127,
                        "ExamQuestionID": 46025,
                        "Name": "??????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:32:23",
                        "MP3": null
                      },
                      {
                        "ID": 162128,
                        "ExamQuestionID": 46025,
                        "Name": "?????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:32:27",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46026,
                    "ExamGroupID": 3672,
                    "Name": "<font face=\"UD Digi Kyokasho N-R, serif\">49.&nbsp;</font><span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:30:00",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162129,
                        "ExamQuestionID": 46026,
                        "Name": "???????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 08:32:41",
                        "MP3": null
                      },
                      {
                        "ID": 162130,
                        "ExamQuestionID": 46026,
                        "Name": "?????????????????????????????????????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 2,
                        "Updated": "2022-07-28 08:32:49",
                        "MP3": null
                      },
                      {
                        "ID": 162131,
                        "ExamQuestionID": 46026,
                        "Name": "?????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:32:53",
                        "MP3": null
                      },
                      {
                        "ID": 162132,
                        "ExamQuestionID": 46026,
                        "Name": "???????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:32:57",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9822,
            "ExamPartID": 3008,
            "Name": "????????????6???",
            "Order": 6,
            "Updated": "2022-07-28 08:42:16",
            "Activity": 1,
            "groups": [
              {
                "ID": 3673,
                "ExamPart2ID": 9822,
                "Content": "&nbsp;",
                "Image": "Data/upload/files/mod-exam-group/1658972101_7368904_f4684beb8448fd841059b5ec96f31b71.png",
                "Order": 1,
                "Created": "2022-07-28 08:35:01",
                "Updated": "2022-07-28 08:35:01",
                "Mp3": null,
                "ImageTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-group/1658972101_7368904_f4684beb8448fd841059b5ec96f31b71.png",
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46027,
                    "ExamGroupID": 3673,
                    "Name": "50.&nbsp;<span lang=\"VI\" style=\"font-size:12.0pt;font-family:\r\n&quot;Cambria Math&quot;,serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\r\nmso-fareast-font-family:&quot;Yu Mincho&quot;;mso-fareast-theme-font:minor-fareast;\r\nmso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\r\n&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;\r\nmso-fareast-language:JA;mso-bidi-language:AR-SA;mso-char-type:symbol-ext;\r\nmso-symbol-font-family:&quot;Cambria Math&quot;\">???</span><u><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;letter-spacing:-.5pt;mso-ansi-language:VI;mso-fareast-language:JA;\r\nmso-bidi-language:AR-SA;mso-bidi-font-weight:bold\">???????????????????????????????????????????????????????????????</span></u><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;letter-spacing:-.5pt;mso-ansi-language:VI;\r\nmso-fareast-language:JA;mso-bidi-language:AR-SA;mso-bidi-font-weight:bold\">?????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:35:40",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162133,
                        "ExamQuestionID": 46027,
                        "Name": "?????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 08:37:08",
                        "MP3": null
                      },
                      {
                        "ID": 162134,
                        "ExamQuestionID": 46027,
                        "Name": "?????????????????????????????????????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 2,
                        "Updated": "2022-07-28 08:37:28",
                        "MP3": null
                      },
                      {
                        "ID": 162135,
                        "ExamQuestionID": 46027,
                        "Name": "??????????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:37:41",
                        "MP3": null
                      },
                      {
                        "ID": 162136,
                        "ExamQuestionID": 46027,
                        "Name": "?????????????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:37:51",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46028,
                    "ExamGroupID": 3673,
                    "Name": "51.&nbsp;<span lang=\"VI\" style=\"font-size:12.0pt;font-family:\r\n&quot;Cambria Math&quot;,serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\r\nmso-fareast-font-family:&quot;Yu Mincho&quot;;mso-fareast-theme-font:minor-fareast;\r\nmso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\r\n&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;mso-ansi-language:VI;\r\nmso-fareast-language:JA;mso-bidi-language:AR-SA;mso-char-type:symbol-ext;\r\nmso-symbol-font-family:&quot;Cambria Math&quot;\">???</span><u><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">????????????????????????????????????????????????</span></u><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;mso-ansi-language:VI;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:35:28",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162137,
                        "ExamQuestionID": 46028,
                        "Name": "???????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 08:38:36",
                        "MP3": null
                      },
                      {
                        "ID": 162138,
                        "ExamQuestionID": 46028,
                        "Name": "????????????????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:39:02",
                        "MP3": null
                      },
                      {
                        "ID": 162139,
                        "ExamQuestionID": 46028,
                        "Name": "?????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:39:06",
                        "MP3": null
                      },
                      {
                        "ID": 162140,
                        "ExamQuestionID": 46028,
                        "Name": "????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 4,
                        "Updated": "2022-07-28 09:40:06",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46029,
                    "ExamGroupID": 3673,
                    "Name": "52.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">??????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:36:01",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162141,
                        "ExamQuestionID": 46029,
                        "Name": "??????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 08:39:28",
                        "MP3": null
                      },
                      {
                        "ID": 162142,
                        "ExamQuestionID": 46029,
                        "Name": "?????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:39:32",
                        "MP3": null
                      },
                      {
                        "ID": 162143,
                        "ExamQuestionID": 46029,
                        "Name": "????????????????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 3,
                        "Updated": "2022-07-28 08:39:39",
                        "MP3": null
                      },
                      {
                        "ID": 162144,
                        "ExamQuestionID": 46029,
                        "Name": "?????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 09:40:12",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46030,
                    "ExamGroupID": 3673,
                    "Name": "53.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">???????????????????????????????????????????????????????????????????????????????????????</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:36:12",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162145,
                        "ExamQuestionID": 46030,
                        "Name": "?????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 1,
                        "Updated": "2022-07-28 08:39:58",
                        "MP3": null
                      },
                      {
                        "ID": 162146,
                        "ExamQuestionID": 46030,
                        "Name": "???????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:40:04",
                        "MP3": null
                      },
                      {
                        "ID": 162147,
                        "ExamQuestionID": 46030,
                        "Name": "????????????????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:40:10",
                        "MP3": null
                      },
                      {
                        "ID": 162148,
                        "ExamQuestionID": 46030,
                        "Name": "????????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:40:17",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9823,
            "ExamPartID": 3008,
            "Name": "????????????7????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 7,
            "Updated": "2022-07-28 08:42:04",
            "Activity": 1,
            "groups": [
              {
                "ID": 3674,
                "ExamPart2ID": 9823,
                "Content": "&nbsp;",
                "Image": "Data/upload/files/mod-exam-group/1658972568_3705311_4cfba24b711294d02f51cc867b5ac7e5.png",
                "Order": 1,
                "Created": "2022-07-28 08:42:48",
                "Updated": "2022-07-28 08:42:48",
                "Mp3": null,
                "ImageTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-group/1658972568_3705311_4cfba24b711294d02f51cc867b5ac7e5.png",
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46031,
                    "ExamGroupID": 3674,
                    "Name": "54.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">???????????????????????????????????????</span><span style=\"font-size:12.0pt;\r\nfont-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">17<span lang=\"JA\">???????????????????????????????????????</span>11<span lang=\"JA\">???????????????????????????????????????????????????????????????????????????????????????????????????????????????</span></span><span lang=\"JA\" style=\"font-size:12.0pt;font-family:&quot;Yu Mincho&quot;,serif;mso-bidi-font-family:\r\n&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;color:black;mso-ansi-language:\r\nEN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA\">???</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:44:32",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162149,
                        "ExamQuestionID": 46031,
                        "Name": "A???B",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 08:45:16",
                        "MP3": null
                      },
                      {
                        "ID": 162150,
                        "ExamQuestionID": 46031,
                        "Name": "A???C",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:45:22",
                        "MP3": null
                      },
                      {
                        "ID": 162151,
                        "ExamQuestionID": 46031,
                        "Name": "B???C",
                        "Point": 3,
                        "Order": 3,
                        "Updated": "2022-07-28 08:45:29",
                        "MP3": null
                      },
                      {
                        "ID": 162152,
                        "ExamQuestionID": 46031,
                        "Name": "C???D",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:45:35",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46032,
                    "ExamGroupID": 3674,
                    "Name": "55.&nbsp;<span lang=\"JA\" style=\"font-size:12.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;\r\nmso-bidi-font-weight:bold\">??????????????????????????????????????????????????????????????????????????????????????????????????????</span><span style=\"font-size:12.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:\r\nminor-bidi;mso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:\r\nAR-SA;mso-bidi-font-weight:bold\">9<span lang=\"JA\">??????</span>4<span lang=\"JA\">????????????????????????????????????????????????????????????????????????????????????</span></span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:44:46",
                    "Activity": 1,
                    "MP3": null,
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": null,
                    "exam_answers": [
                      {
                        "ID": 162153,
                        "ExamQuestionID": 46032,
                        "Name": "A",
                        "Point": 3,
                        "Order": 1,
                        "Updated": "2022-07-28 08:45:43",
                        "MP3": null
                      },
                      {
                        "ID": 162154,
                        "ExamQuestionID": 46032,
                        "Name": "B",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:45:50",
                        "MP3": null
                      },
                      {
                        "ID": 162155,
                        "ExamQuestionID": 46032,
                        "Name": "C",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:45:53",
                        "MP3": null
                      },
                      {
                        "ID": 162156,
                        "ExamQuestionID": 46032,
                        "Name": "D",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:45:56",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "ID": 3009,
        "ExamID": 1205,
        "Name": "Nghe Hi????u",
        "Code": "nghe-hieu",
        "Time": 15,
        "Point": 30,
        "Order": 730,
        "Updated": "2022-07-27 15:11:12",
        "Activity": 1,
        "mp3": null,
        "free_time": 0,
        "type": 5,
        "SlipPoint": 10,
        "Mp3Temp": null,
        "exam_part2": [
          {
            "ID": 9824,
            "ExamPartID": 3009,
            "Name": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 1,
            "Updated": "2022-07-28 08:51:21",
            "Activity": 1,
            "groups": [
              {
                "ID": 3675,
                "ExamPart2ID": 9824,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-28 08:51:41",
                "Updated": "2022-07-28 08:51:41",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46033,
                    "ExamGroupID": 3675,
                    "Name": "<span style=\"font-size:14.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA;mso-bidi-font-weight:bold\">1<span lang=\"JA\">???</span></span>",
                    "Point": null,
                    "Order": 1,
                    "File": "Data/upload/files/mod-exam-question/1658973433_4718093_32a19bf15a8c503f8ee7503138add4d3.png",
                    "Content": "",
                    "Updated": "2022-07-28 08:57:13",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658973433_40537_d4dbf88dbc19df0e701b3a8b0cc1bb26.mp3",
                    "Type": 3,
                    "FileTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658973433_4718093_32a19bf15a8c503f8ee7503138add4d3.png",
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658973433_40537_d4dbf88dbc19df0e701b3a8b0cc1bb26.mp3",
                    "exam_answers": [
                      {
                        "ID": 162157,
                        "ExamQuestionID": 46033,
                        "Name": "1.",
                        "Point": 3,
                        "Order": 1,
                        "Updated": "2022-07-28 08:58:33",
                        "MP3": null
                      },
                      {
                        "ID": 162158,
                        "ExamQuestionID": 46033,
                        "Name": "2.",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:58:38",
                        "MP3": null
                      },
                      {
                        "ID": 162159,
                        "ExamQuestionID": 46033,
                        "Name": "3.",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 08:58:40",
                        "MP3": null
                      },
                      {
                        "ID": 162160,
                        "ExamQuestionID": 46033,
                        "Name": "4.",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:58:45",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46034,
                    "ExamGroupID": 3675,
                    "Name": "<span style=\"font-size:14.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA;mso-bidi-font-weight:bold\">2<span lang=\"JA\">???</span></span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:57:39",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658973459_4955773_a52f503e839ca848a7f959c206f9c75a.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658973459_4955773_a52f503e839ca848a7f959c206f9c75a.mp3",
                    "exam_answers": [
                      {
                        "ID": 162161,
                        "ExamQuestionID": 46034,
                        "Name": "???????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 08:58:54",
                        "MP3": null
                      },
                      {
                        "ID": 162162,
                        "ExamQuestionID": 46034,
                        "Name": "???????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 08:58:59",
                        "MP3": null
                      },
                      {
                        "ID": 162163,
                        "ExamQuestionID": 46034,
                        "Name": "????????????????????????",
                        "Point": 3,
                        "Order": 3,
                        "Updated": "2022-07-28 08:59:06",
                        "MP3": null
                      },
                      {
                        "ID": 162164,
                        "ExamQuestionID": 46034,
                        "Name": "???????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 08:59:15",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46035,
                    "ExamGroupID": 3675,
                    "Name": "<span style=\"font-size:14.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA;mso-bidi-font-weight:bold\">3<span lang=\"JA\">???</span></span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 08:58:00",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658973480_20892_ed1df391271dfa103c841d2cda0dc0ba.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658973480_20892_ed1df391271dfa103c841d2cda0dc0ba.mp3",
                    "exam_answers": [
                      {
                        "ID": 162165,
                        "ExamQuestionID": 46035,
                        "Name": "?????????????????????????????????",
                        "Point": 3,
                        "Order": 1,
                        "Updated": "2022-07-28 08:59:59",
                        "MP3": null
                      },
                      {
                        "ID": 162166,
                        "ExamQuestionID": 46035,
                        "Name": "?????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:00:05",
                        "MP3": null
                      },
                      {
                        "ID": 162167,
                        "ExamQuestionID": 46035,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:00:10",
                        "MP3": null
                      },
                      {
                        "ID": 162168,
                        "ExamQuestionID": 46035,
                        "Name": "?????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 09:00:16",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9825,
            "ExamPartID": 3009,
            "Name": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 2,
            "Updated": "2022-07-28 09:01:11",
            "Activity": 1,
            "groups": [
              {
                "ID": 3676,
                "ExamPart2ID": 9825,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-28 09:01:54",
                "Updated": "2022-07-28 09:01:54",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46036,
                    "ExamGroupID": 3676,
                    "Name": "<span style=\"font-size:14.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;color:black;mso-themecolor:text1;mso-ansi-language:\r\nEN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;mso-bidi-font-weight:\r\nbold\">1<span lang=\"JA\">???</span></span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:06:31",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658973991_5071551_ebc8532f28137c024d5fba15a51e6e77.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658973991_5071551_ebc8532f28137c024d5fba15a51e6e77.mp3",
                    "exam_answers": [
                      {
                        "ID": 162169,
                        "ExamQuestionID": 46036,
                        "Name": "???????????????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:03:05",
                        "MP3": null
                      },
                      {
                        "ID": 162170,
                        "ExamQuestionID": 46036,
                        "Name": "?????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:03:09",
                        "MP3": null
                      },
                      {
                        "ID": 162171,
                        "ExamQuestionID": 46036,
                        "Name": "?????????????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:03:14",
                        "MP3": null
                      },
                      {
                        "ID": 162172,
                        "ExamQuestionID": 46036,
                        "Name": "??????????????????????????????",
                        "Point": 3,
                        "Order": 4,
                        "Updated": "2022-07-28 09:03:21",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46037,
                    "ExamGroupID": 3676,
                    "Name": "<span style=\"font-size:14.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;color:black;mso-themecolor:text1;mso-ansi-language:\r\nEN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;mso-bidi-font-weight:\r\nbold\">2<span lang=\"JA\">???</span></span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:06:43",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974003_4866767_69b2f1376a49e00bf0fddc5d0efc9cd1.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974003_4866767_69b2f1376a49e00bf0fddc5d0efc9cd1.mp3",
                    "exam_answers": [
                      {
                        "ID": 162173,
                        "ExamQuestionID": 46037,
                        "Name": "??????????????????????????????",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:03:40",
                        "MP3": null
                      },
                      {
                        "ID": 162174,
                        "ExamQuestionID": 46037,
                        "Name": "???????????????????????????????????????????????????",
                        "Point": 3,
                        "Order": 2,
                        "Updated": "2022-07-28 09:03:46",
                        "MP3": null
                      },
                      {
                        "ID": 162175,
                        "ExamQuestionID": 46037,
                        "Name": "???????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:03:49",
                        "MP3": null
                      },
                      {
                        "ID": 162176,
                        "ExamQuestionID": 46037,
                        "Name": "???????????????????????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 09:03:55",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46038,
                    "ExamGroupID": 3676,
                    "Name": "<span style=\"font-size:14.0pt;font-family:&quot;UD Digi Kyokasho N-R&quot;,serif;\r\nmso-hansi-font-family:&quot;r0c0i Linotte&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-bidi-theme-font:minor-bidi;color:black;mso-themecolor:text1;mso-ansi-language:\r\nEN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA;mso-bidi-font-weight:\r\nbold\">3<span lang=\"JA\">???</span></span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:06:55",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974015_2621686_36f2f486c5e6ffe022f81df2570ba39b.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974015_2621686_36f2f486c5e6ffe022f81df2570ba39b.mp3",
                    "exam_answers": [
                      {
                        "ID": 162177,
                        "ExamQuestionID": 46038,
                        "Name": "????????????????????????????????????",
                        "Point": 3,
                        "Order": 1,
                        "Updated": "2022-07-28 09:04:09",
                        "MP3": null
                      },
                      {
                        "ID": 162178,
                        "ExamQuestionID": 46038,
                        "Name": "????????????????????????????????????",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:04:14",
                        "MP3": null
                      },
                      {
                        "ID": 162179,
                        "ExamQuestionID": 46038,
                        "Name": "??????????????????????????????",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:04:20",
                        "MP3": null
                      },
                      {
                        "ID": 162180,
                        "ExamQuestionID": 46038,
                        "Name": "?????????????????????????????????",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 09:04:28",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9826,
            "ExamPartID": 3009,
            "Name": "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 3,
            "Updated": "2022-07-28 09:04:51",
            "Activity": 1,
            "groups": [
              {
                "ID": 3677,
                "ExamPart2ID": 9826,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-28 09:04:59",
                "Updated": "2022-07-28 09:04:59",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46039,
                    "ExamGroupID": 3677,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\ncolor:black;mso-themecolor:text1;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA;mso-bidi-font-weight:bold\">??????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:06:15",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658973975_9804794_5afb71f9340bb831d1a393a8bea13429.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658973975_9804794_5afb71f9340bb831d1a393a8bea13429.mp3",
                    "exam_answers": [
                      {
                        "ID": 162181,
                        "ExamQuestionID": 46039,
                        "Name": "1.",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:05:48",
                        "MP3": null
                      },
                      {
                        "ID": 162182,
                        "ExamQuestionID": 46039,
                        "Name": "2.",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:05:50",
                        "MP3": null
                      },
                      {
                        "ID": 162183,
                        "ExamQuestionID": 46039,
                        "Name": "3.",
                        "Point": 5,
                        "Order": 3,
                        "Updated": "2022-07-28 09:15:19",
                        "MP3": null
                      },
                      {
                        "ID": 162184,
                        "ExamQuestionID": 46039,
                        "Name": "4.",
                        "Point": 0,
                        "Order": 4,
                        "Updated": "2022-07-28 09:05:57",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9827,
            "ExamPartID": 3009,
            "Name": "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 4,
            "Updated": "2022-07-28 09:08:46",
            "Activity": 1,
            "groups": [
              {
                "ID": 3679,
                "ExamPart2ID": 9827,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-28 09:08:55",
                "Updated": "2022-07-28 09:08:55",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46041,
                    "ExamGroupID": 3679,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin;\r\ncolor:black;mso-themecolor:text1;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA\">??????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": "Data/upload/files/mod-exam-question/1658974185_3700739_e041ccecaca021719f66427fb26a40cc.png",
                    "Content": "",
                    "Updated": "2022-07-28 09:09:45",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974185_6627996_0ea48554eb4b6a889e117af95ab1d7ec.mp3",
                    "Type": 3,
                    "FileTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974185_3700739_e041ccecaca021719f66427fb26a40cc.png",
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974185_6627996_0ea48554eb4b6a889e117af95ab1d7ec.mp3",
                    "exam_answers": [
                      {
                        "ID": 162185,
                        "ExamQuestionID": 46041,
                        "Name": "1.",
                        "Point": 1,
                        "Order": 1,
                        "Updated": "2022-07-28 09:10:38",
                        "MP3": null
                      },
                      {
                        "ID": 162186,
                        "ExamQuestionID": 46041,
                        "Name": "2.",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:10:40",
                        "MP3": null
                      },
                      {
                        "ID": 162187,
                        "ExamQuestionID": 46041,
                        "Name": "3.",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:10:43",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46042,
                    "ExamGroupID": 3679,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin;\r\ncolor:black;mso-themecolor:text1;mso-ansi-language:EN-US;mso-fareast-language:\r\nJA;mso-bidi-language:AR-SA\">??????</span>",
                    "Point": null,
                    "Order": 2,
                    "File": "Data/upload/files/mod-exam-question/1658974214_2725702_329aa044c5400ebea6f88b1ada8436d9.png",
                    "Content": "",
                    "Updated": "2022-07-28 09:10:14",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974214_7018404_448f11f56b49559c7d04d70ba8d71338.mp3",
                    "Type": 3,
                    "FileTemp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974214_2725702_329aa044c5400ebea6f88b1ada8436d9.png",
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974214_7018404_448f11f56b49559c7d04d70ba8d71338.mp3",
                    "exam_answers": [
                      {
                        "ID": 162188,
                        "ExamQuestionID": 46042,
                        "Name": "1.",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:10:51",
                        "MP3": null
                      },
                      {
                        "ID": 162189,
                        "ExamQuestionID": 46042,
                        "Name": "2.",
                        "Point": 1,
                        "Order": 2,
                        "Updated": "2022-07-28 09:10:54",
                        "MP3": null
                      },
                      {
                        "ID": 162190,
                        "ExamQuestionID": 46042,
                        "Name": "3.",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:10:57",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "ID": 9828,
            "ExamPartID": 3009,
            "Name": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Order": 5,
            "Updated": "2022-07-28 09:11:45",
            "Activity": 1,
            "groups": [
              {
                "ID": 3680,
                "ExamPart2ID": 9828,
                "Content": "&nbsp;",
                "Image": null,
                "Order": 1,
                "Created": "2022-07-28 09:11:58",
                "Updated": "2022-07-28 09:11:58",
                "Mp3": null,
                "ImageTemp": null,
                "Mp3Temp": "https://riki.edu.vn/online/",
                "questions": [
                  {
                    "ID": 46043,
                    "ExamGroupID": 3680,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA\">??????</span>",
                    "Point": null,
                    "Order": 1,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:12:23",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974343_4529765_9370b4a630ea7742bad2dbcc6c9b661f.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974343_4529765_9370b4a630ea7742bad2dbcc6c9b661f.mp3",
                    "exam_answers": [
                      {
                        "ID": 162191,
                        "ExamQuestionID": 46043,
                        "Name": "1.",
                        "Point": 1,
                        "Order": 1,
                        "Updated": "2022-07-28 09:13:42",
                        "MP3": null
                      },
                      {
                        "ID": 162192,
                        "ExamQuestionID": 46043,
                        "Name": "2.",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:13:44",
                        "MP3": null
                      },
                      {
                        "ID": 162193,
                        "ExamQuestionID": 46043,
                        "Name": "3.",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:13:46",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46044,
                    "ExamGroupID": 3680,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA\">2???</span>",
                    "Point": null,
                    "Order": 2,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:12:36",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974356_6326569_2e39f07805edcc74770b569848905b76.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974356_6326569_2e39f07805edcc74770b569848905b76.mp3",
                    "exam_answers": [
                      {
                        "ID": 162194,
                        "ExamQuestionID": 46044,
                        "Name": "1.",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:13:49",
                        "MP3": null
                      },
                      {
                        "ID": 162195,
                        "ExamQuestionID": 46044,
                        "Name": "2.",
                        "Point": 1,
                        "Order": 2,
                        "Updated": "2022-07-28 09:13:52",
                        "MP3": null
                      },
                      {
                        "ID": 162196,
                        "ExamQuestionID": 46044,
                        "Name": "3.",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:13:56",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46045,
                    "ExamGroupID": 3680,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA\">3???</span>",
                    "Point": null,
                    "Order": 3,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:12:48",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974368_9379997_dfbe0ffb350092e40fb1a44cb50e9268.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974368_9379997_dfbe0ffb350092e40fb1a44cb50e9268.mp3",
                    "exam_answers": [
                      {
                        "ID": 162197,
                        "ExamQuestionID": 46045,
                        "Name": "1.",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:14:01",
                        "MP3": null
                      },
                      {
                        "ID": 162198,
                        "ExamQuestionID": 46045,
                        "Name": "2.",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:14:03",
                        "MP3": null
                      },
                      {
                        "ID": 162199,
                        "ExamQuestionID": 46045,
                        "Name": "3.",
                        "Point": 1,
                        "Order": 3,
                        "Updated": "2022-07-28 09:14:07",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46046,
                    "ExamGroupID": 3680,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA\">4???</span>",
                    "Point": null,
                    "Order": 4,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:12:59",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974379_7121975_741a77ad890c3c5fc1e95a100c7c4e09.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974379_7121975_741a77ad890c3c5fc1e95a100c7c4e09.mp3",
                    "exam_answers": [
                      {
                        "ID": 162200,
                        "ExamQuestionID": 46046,
                        "Name": "1.",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:14:12",
                        "MP3": null
                      },
                      {
                        "ID": 162201,
                        "ExamQuestionID": 46046,
                        "Name": "2.",
                        "Point": 1,
                        "Order": 2,
                        "Updated": "2022-07-28 09:14:15",
                        "MP3": null
                      },
                      {
                        "ID": 162202,
                        "ExamQuestionID": 46046,
                        "Name": "3.",
                        "Point": 0,
                        "Order": 3,
                        "Updated": "2022-07-28 09:14:17",
                        "MP3": null
                      }
                    ]
                  },
                  {
                    "ID": 46047,
                    "ExamGroupID": 3680,
                    "Name": "<span lang=\"JA\" style=\"font-size:14.0pt;font-family:\r\n&quot;UD Digi Kyokasho N-R&quot;,serif;mso-hansi-font-family:&quot;UD Digi Kyokasho N-R&quot;;\r\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r\nmso-ansi-language:EN-US;mso-fareast-language:JA;mso-bidi-language:AR-SA\">5???</span>",
                    "Point": null,
                    "Order": 5,
                    "File": null,
                    "Content": "",
                    "Updated": "2022-07-28 09:13:10",
                    "Activity": 1,
                    "MP3": "Data/upload/files/mod-exam-question/1658974390_7857896_7249906a5169b432e66de1801b9a1551.mp3",
                    "Type": 3,
                    "FileTemp": null,
                    "Mp3Temp": "https://riki.edu.vn/online/Data/upload/files/mod-exam-question/1658974390_7857896_7249906a5169b432e66de1801b9a1551.mp3",
                    "exam_answers": [
                      {
                        "ID": 162203,
                        "ExamQuestionID": 46047,
                        "Name": "1.",
                        "Point": 0,
                        "Order": 1,
                        "Updated": "2022-07-28 09:14:21",
                        "MP3": null
                      },
                      {
                        "ID": 162204,
                        "ExamQuestionID": 46047,
                        "Name": "2.",
                        "Point": 0,
                        "Order": 2,
                        "Updated": "2022-07-28 09:14:23",
                        "MP3": null
                      },
                      {
                        "ID": 162205,
                        "ExamQuestionID": 46047,
                        "Name": "3.",
                        "Point": 1,
                        "Order": 3,
                        "Updated": "2022-07-28 09:14:26",
                        "MP3": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "syspage": {
      "ID": 3891,
      "TemplateID": 26,
      "TemplateMobileID": null,
      "TemplateTabletID": null,
      "ModuleCode": "MExam",
      "LangID": 1,
      "MenuID": 1735,
      "BrandID": null,
      "ParentID": 3888,
      "State": null,
      "Name": "N3",
      "Code": "thi-thu-tieng-nhat-n3",
      "File": null,
      "Icon": null,
      "Summary": null,
      "Custom": null,
      "TopContent": "<p><strong>C???u tr&uacute;c ????? thi N3</strong></p>\r\n\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"2\" width=\"142\">(Th???i gian thi)</td>\r\n\t\t\t<td colspan=\"2\" width=\"208\">Ti&ecirc;u ?????</td>\r\n\t\t\t<td>S??? c&acirc;u</td>\r\n\t\t\t<td>M???c ti&ecirc;u</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td rowspan=\"5\" width=\"62\">????????????(30???)</td>\r\n\t\t\t<td rowspan=\"5\" width=\"80\">???????????????</td>\r\n\t\t\t<td align=\"right\">1</td>\r\n\t\t\t<td align=\"left\">????????????</td>\r\n\t\t\t<td>8</td>\r\n\t\t\t<td align=\"left\">C&aacute;ch ?????c nh???ng t??? ???????c vi???t b???ng H&aacute;n t???.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">2</td>\r\n\t\t\t<td align=\"left\">??????</td>\r\n\t\t\t<td>6</td>\r\n\t\t\t<td align=\"left\">Nh???ng t??? ???????c vi???t b???ng Hiragana s??? ???????c vi???t sang H&aacute;n t??? ho???c Katakana nh?? th??? n&agrave;o, ph&ugrave; h???p v???i &yacute; ngh??a c???a c&acirc;u.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">3</td>\r\n\t\t\t<td align=\"left\">????????????</td>\r\n\t\t\t<td>11</td>\r\n\t\t\t<td align=\"left\">T&ugrave;y theo m???ch v??n t&igrave;m nh???ng t??? ???????c quy ?????nh ph&ugrave; h???p v??? m???t ng??? ngh??a l&agrave; t??? n&agrave;o.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">4</td>\r\n\t\t\t<td align=\"left\">??????????????????</td>\r\n\t\t\t<td>5</td>\r\n\t\t\t<td align=\"left\">T&igrave;m nh???ng c&aacute;ch di???n ?????t, nh???ng t??? g???n ngh??a v???i c&aacute;c t??? ??&atilde; cho.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">5</td>\r\n\t\t\t<td align=\"left\">??????</td>\r\n\t\t\t<td>5</td>\r\n\t\t\t<td align=\"left\">Bi???t ???????c t??? ??&oacute; s??? d???ng nh?? th??? n&agrave;o trong c&aacute;c c&acirc;u ???????c ????a ra.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td rowspan=\"8\" width=\"62\">????????????????????????70??????</td>\r\n\t\t\t<td rowspan=\"3\" width=\"80\">??????</td>\r\n\t\t\t<td align=\"right\">1</td>\r\n\t\t\t<td>??????????????????????????????????????????</td>\r\n\t\t\t<td>13</td>\r\n\t\t\t<td align=\"left\">C&oacute; th??? ph&aacute;n ??o&aacute;n ???????c h&igrave;nh th???c ng??? ph&aacute;p n&agrave;o ph&ugrave; h???p v???i n???i dung c&acirc;u v??n.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">2</td>\r\n\t\t\t<td>???????????????????????????????????????</td>\r\n\t\t\t<td>5</td>\r\n\t\t\t<td align=\"left\">C&oacute; th??? t???o ???????c c&acirc;u v??n m???ch l???c v??? m???t &yacute; ngh??a v&agrave; ??&uacute;ng c&uacute; ph&aacute;p.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">3</td>\r\n\t\t\t<td>???????????????</td>\r\n\t\t\t<td>5</td>\r\n\t\t\t<td align=\"left\">C&oacute; th??? ph&aacute;n ??o&aacute;n ???????c c&acirc;u n&agrave;o ph&ugrave; h???p v???i d&ograve;ng ch???y c???a ??o???n v??n.</td>\r\n\t\t</tr>\r\n\t\t<tr height=\"39\">\r\n\t\t\t<td rowspan=\"5\" width=\"80\">??????</td>\r\n\t\t\t<td align=\"right\">4</td>\r\n\t\t\t<td>????????????</td>\r\n\t\t\t<td>4</td>\r\n\t\t\t<td align=\"left\">?????c v&agrave; hi???u ???????c n???i dung c???a m???t v??n b???n kho???ng 150 ~ 200 ch??? H&aacute;n t???, th??? lo???i v??n gi???i th&iacute;ch, ch??? th???.. v???i n???i d???ng c&oacute; li&ecirc;n quan ?????n c&ocirc;ng vi???c v&agrave; cu???c s???ng.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td width=\"62\">&nbsp;</td>\r\n\t\t\t<td>????????????</td>\r\n\t\t\t<td>&nbsp;</td>\r\n\t\t\t<td>&nbsp;</td>\r\n\t\t</tr>\r\n\t\t<tr height=\"39\">\r\n\t\t\t<td align=\"right\">5</td>\r\n\t\t\t<td>????????????????????????</td>\r\n\t\t\t<td>6</td>\r\n\t\t\t<td align=\"left\">?????c n???i dung c???a m???t v??n b???n kho???ng 350 ch??? H&aacute;n t???, th??? lo???i v??n gi???i th&iacute;ch ho???c t??? lu???n... Bi???t ???????c c&aacute;c t??? kh&oacute;a, c&aacute;c m???i quan h??? nh&acirc;n qu???&hellip;</td>\r\n\t\t</tr>\r\n\t\t<tr height=\"39\">\r\n\t\t\t<td align=\"right\">6</td>\r\n\t\t\t<td>????????????????????????</td>\r\n\t\t\t<td>4</td>\r\n\t\t\t<td align=\"left\">?????c n???i dung c???a m???t v??n b???n kho???ng 550 ch??? H&aacute;n t???, th??? lo???i v??n gi???i th&iacute;ch, th?? t??? ho???c t??? lu???n... Bi???t c&aacute;ch kh&aacute;i qu&aacute;t, n???m ???????c h?????ng tri???n khai c???a c&aacute;c l&iacute; lu???n.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">7</td>\r\n\t\t\t<td>????????????</td>\r\n\t\t\t<td>2</td>\r\n\t\t\t<td align=\"left\">C&oacute; th??? t&igrave;m ra nh???ng th&ocirc;ng tin c???n thi???t trong c&aacute;c b???n qu???ng c&aacute;o, t??? r??i&hellip; c&oacute; kho???ng 600 ch??? H&aacute;n t??? c?? b???n.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"2\" rowspan=\"5\" width=\"142\">?????????40??????</td>\r\n\t\t\t<td align=\"right\">1</td>\r\n\t\t\t<td>????????????</td>\r\n\t\t\t<td>6</td>\r\n\t\t\t<td align=\"left\">C&oacute; th??? hi???u ???????c n???i dung khi nghe m???t ??o???n v??n, m???t ??o???n h???i tho???i. ( Nghe v&agrave; n???m b???t nh???ng th&ocirc;ng tin c???n thi???t, gi???i quy???t nh???ng ch??? ????? mang t&iacute;nh c??? th??? v&agrave; c&oacute; th??? bi???t ???????c c&aacute;i th&iacute;ch h???p ti???p theo l&agrave; c&aacute;i g&igrave;. )</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">2</td>\r\n\t\t\t<td>??????????????????</td>\r\n\t\t\t<td>6</td>\r\n\t\t\t<td align=\"left\">C&oacute; th??? hi???u ???????c n???i dung khi nghe m???t ??o???n v??n, m???t ??o???n h???i tho???i. ( Ph???i nghe c&aacute;i ??&atilde; ???????c ch??? th??? t??? tr?????c, c&oacute; kh??? n??ng nghe v&agrave; l?????c ra nh???ng ??i???m ch&iacute;nh)</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">3</td>\r\n\t\t\t<td>????????????</td>\r\n\t\t\t<td>3</td>\r\n\t\t\t<td align=\"left\">C&oacute; th??? hi???u ???????c n???i dung khi nghe m???t ??o???n v??n, m???t ??o???n h???i tho???i.(T??? ??o???n h???i tho???i c&oacute; th??? hi???u ???????c ch??? tr????ng, &yacute; ????? c???a ng?????i n&oacute;i)</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">4</td>\r\n\t\t\t<td>????????????</td>\r\n\t\t\t<td>4</td>\r\n\t\t\t<td align=\"left\">V???a nh&igrave;n h&igrave;nh v???a nghe gi???i th&iacute;ch t&igrave;nh hu???ng ????? ch???n l???a c&acirc;u tho???i th&iacute;ch h???p.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td align=\"right\">5</td>\r\n\t\t\t<td>????????????</td>\r\n\t\t\t<td>9</td>\r\n\t\t\t<td align=\"left\">Nghe c&acirc;u tho???i ng???n ch???ng h???n nh?? m???t c&acirc;u h???i r???i ch???n c&acirc;u ???ng ??&aacute;p th&iacute;ch h???p.</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p><strong>C&aacute;c th&ocirc;ng tin kh&aacute;c:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<table border=\"0\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td>??i???m&nbsp;????????????????????????</td>\r\n\t\t\t<td>T???i ??a:60 ??i???m</td>\r\n\t\t\t<td>??i???m li???t: 19 ??i???m</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>??i???m&nbsp;??????</td>\r\n\t\t\t<td>T???i ??a: 60 ??i???m</td>\r\n\t\t\t<td>??i???m li???t: 19 ??i???m</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>??i???m&nbsp;??????</td>\r\n\t\t\t<td>T???i ??a: 60 ??i???m</td>\r\n\t\t\t<td>??i???m li???t: 19 ??i???m</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"3\">&nbsp;</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>??i???m ?????u:</td>\r\n\t\t\t<td>95 ??i???m</td>\r\n\t\t\t<td>&nbsp;</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"3\">\r\n\t\t\t<p>* Ch&uacute; &yacute;:</p>\r\n\r\n\t\t\t<p>- Thang ??i???m th???c t??? t???ng m???c trong b&agrave;i thi s??? kh&aacute;c nhau t&ugrave;y theo m???c ????? kh&oacute; c???a ph???n ??&oacute;. Thang ??i???m n&agrave;y t??? ch???c JLPT kh&ocirc;ng c&ocirc;ng b??? n&ecirc;n vi???c t&iacute;nh ??i???m ?????u ch??? mang t&iacute;nh t????ng ?????i.</p>\r\n\r\n\t\t\t<p>- Ca??c ??&ecirc;?? thi h&acirc;??u h&ecirc;??t chi?? co?? ??a??p a??n, kh&ocirc;ng co?? ph&acirc;??n di??ch. Ca??c ba??n ho??c co?? ph&acirc;??n di??ch trong ph&acirc;??n ??&ecirc;?? luy&ecirc;??n thi.</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n",
      "Content": null,
      "LinkTitle": null,
      "PageTitle": null,
      "PageDescription": null,
      "PageKeywords": null,
      "Created": "2019-06-28 17:34:48",
      "Updated": "2019-06-28 17:34:48",
      "Order": 3,
      "Activity": 1,
      "ShowMenuTop": null,
      "BackgroundHome": null,
      "Banner": null,
      "BannerNgang": null,
      "EnglishName": null,
      "LevelID": 1739
    }
  },
  "testCount": 0
}

let p2 = dataTest.test.exam_part.map(function(v) {
  return {
    Section: v.Name,
    exam_part2: v.exam_part2.map(function(v) {
      return {
        mondai_number: v.Order,
        questions: v.groups[0].questions.map(function(v) {
          return {
            questions_number: v.Order,
            answer: v.exam_answers.filter(e => e.Point > 0).map(function(v) {
              return {
                answer_number: v.Order,
                answer_text: v.Name,
              }})
          };
        })
      };
    }),
  }})


app.get('/test', (req, res) => {
  res.json(
    p2
  )
})