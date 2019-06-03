const countModel = require('../model/Count')

const indexCount = async (ctx, next) => {
  const { type = 'index', key = 'default', color = 'fff' ,fz = '12' } = ctx.request.query
  const count = await countModel.addCount(type, key)
  await ctx.render('Count', {
    count,
    color,
    fz
  })
}

module.exports = indexCount
