import { IHookParameter } from 'axe-api';

export default async ({ database }: IHookParameter) => {
  const total = await database('users').count({ count: '*' }).first();
  await database('statistics')
      .update({ total: total?.count || 0 })
      .where({ uid: 'totalUsers' })
  ;
};
