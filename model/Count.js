const { query } = require('../db')

class Count {
  // type 计数器类型 计数器key
  async addCount(type, key = 'default') {
    let row = await query(
      `SELECT count from count WHERE type = "${type}" AND countKey = "${key}"`
    )
    // 未找到 新建
    if (row.length <= 0) {
      await query(`INSERT INTO count VALUES("${type}",0,"${key}")`)
      row = await query(
        `SELECT count from count WHERE type = "${type}" AND countKey = "${key}"`
      )
    }
    const count = row[0].count
    // 更新计数器
    await query(
      `UPDATE count SET count = count + 1 WHERE type = "${type}" AND countKey = "${key}"`
    )
    return count + 1
  }
}

module.exports = new Count()
