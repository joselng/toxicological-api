export class AnalysisSampleService {
  async execute (sample: any) {
    const reference = {
      cocaine: 0.5,
      amphetamine: 0.2,
      methamphetamine: 0.2,
      mda: 0.2,
      mdma: 0.2,
      thc: 0.05,
      morphine: 0.2,
      codeine: 0.2,
      heroin: 0.1
    } as any

    const sampleResult = [{ code: sample.code }] as any

    for (const drug in reference) {
      if (drug in sample) {
        if (sample[drug] >= reference[drug]) {
          if (drug === 'cocaine') {
            if (sample.cocaine >= reference.cocaine &&
              (sample.benzoylecgonine >= 0.05 ||
              sample.norcocaine >= 0.05 ||
              sample.cocaethylene >= 0.05)) {
              sampleResult.push({
                cocaine: sample.cocaine,
                result: 'positive',
                other: {
                  benzoylecgonine: sample.benzoylecgonine,
                  norcocaine: sample.norcocaine,
                  cocaethylene: sample.cocaethylene
                }
              })
            }
          } else {
            sampleResult.push({ [drug]: sample[drug], result: 'positive' })
          }
        } else {
          sampleResult.push({ [drug]: sample[drug], result: 'negative' })
        }
      }
    }

    return sampleResult
  }
}
