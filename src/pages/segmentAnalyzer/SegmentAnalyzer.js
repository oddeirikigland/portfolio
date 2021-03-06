import React, { Component } from 'react'
import axios from 'axios'
import { css } from '@emotion/core'
import RingLoader from 'react-spinners/RingLoader'

import SegmentMap from '../../components/Map/SegmentMap'

const segmentAnalyzerStyle = {
  width: '100%',
  height: '100%'
}

const spinnerStyle = css`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  z-index: 99;
`

export default class SegmentAnalyzer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      segments: [],
      loading: false
    }
    this.getSegments = this.getSegments.bind(this)
    this.segmentApiUpdate = this.segmentApiUpdate.bind(this)
    this.toogleLoading = this.toogleLoading.bind(this)
  }

  getSegments (
    countyNumber,
    segmentDistance,
    latitude,
    longitude,
    activityView,
    numberOfSegments
  ) {
    const loading = true
    this.setState({ loading })

    axios
      .get(
        `https://segment-analyzer.herokuapp.com/strava_segments?county_number=${countyNumber}&segment_distance=${segmentDistance}&latitude=${latitude}&longitude=${longitude}&activity_view=${activityView}&number_of_segments=${numberOfSegments}`
      )
      .then(res => {
        const segments = res.data
        const loading = false
        this.setState({ segments, loading })
      })
  }

  segmentApiUpdate (
    countyNumber,
    segmentDistance,
    latitude,
    longitude,
    activityView,
    numberOfSegments
  ) {
    this.getSegments(
      countyNumber,
      segmentDistance,
      latitude,
      longitude,
      activityView,
      numberOfSegments
    )
  }

  toogleLoading () {
    this.setState({ loading: !this.state.loading })
  }

  render () {
    return (
      <div id='segmentAnalyzer' style={segmentAnalyzerStyle}>
        <RingLoader
          css={spinnerStyle}
          sizeUnit='px'
          size={150}
          color='#36D7B7'
          loading={this.state.loading}
        />
        <SegmentMap
          segments={this.state.segments}
          segmentApiUpdate={this.segmentApiUpdate}
          toogleLoading={this.toogleLoading}
        />
      </div>
    )
  }
}
