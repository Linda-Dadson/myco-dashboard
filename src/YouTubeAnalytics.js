import React, { useState, useEffect } from 'react';

const YouTubeAnalytics = ({ apiKey, channelId }) => {
  const [channelData, setChannelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        // Fetch channel statistics
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch YouTube data');
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          setChannelData(data.items[0]);
        } else {
          throw new Error('Channel not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (apiKey && channelId) {
      fetchYouTubeData();
    }
  }, [apiKey, channelId]);

  if (loading) {
    return (
      <div className="youtube-analytics loading">
        <div className="loading-spinner">📺</div>
        <span>Loading YouTube data...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="youtube-analytics error">
        <span>📺 YouTube: Demo Mode</span>
      </div>
    );
  }

  if (!channelData) {
    return (
      <div className="youtube-analytics demo">
        <span>📺 YouTube: 1.2K subscribers</span>
      </div>
    );
  }

  const { statistics, snippet } = channelData;
  const subscriberCount = parseInt(statistics.subscriberCount).toLocaleString();
  const viewCount = parseInt(statistics.viewCount).toLocaleString();
  const videoCount = parseInt(statistics.videoCount).toLocaleString();

  return (
    <div className="youtube-analytics">
      <div className="youtube-header">
        <span className="youtube-icon">📺</span>
        <span className="channel-name">{snippet.title}</span>
      </div>
      <div className="youtube-stats">
        <div className="stat">
          <span className="stat-value">{subscriberCount}</span>
          <span className="stat-label">Subscribers</span>
        </div>
        <div className="stat">
          <span className="stat-value">{viewCount}</span>
          <span className="stat-label">Views</span>
        </div>
        <div className="stat">
          <span className="stat-value">{videoCount}</span>
          <span className="stat-label">Videos</span>
        </div>
      </div>
    </div>
  );
};

export default YouTubeAnalytics;