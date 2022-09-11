import { rest } from 'msw'
import { items } from './data/items.json'

export default [
  rest.get('/api/items', (req, res, ctx) => {
    const limit = parseInt(req.url.searchParams.get('limit') || '10')
    const offset = parseInt(req.url.searchParams.get('offset') || '0')

    const data = items.slice(offset, limit)

    return res(
      ctx.json({
        data,
      }),
    )
  },
  ),
  // rest.get('/api/pages/index', (req, res, ctx) => {
  //   return res(
  //     ctx.json({
  //       seo: {},
  //       blocks: [
  //         {
  //           title: 'popular',
  //           items: items.slice(0, 7).map(({id, img, fullName: name}) => ({
  //             id,
  //             img,
  //             name
  //           }))
  //         }
  //       ]
  //     }),
  //   )
  // })
]
