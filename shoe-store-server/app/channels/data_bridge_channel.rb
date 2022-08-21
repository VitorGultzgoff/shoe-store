class DataBridgeChannel < ApplicationCable::Channel
  def subscribed
    stream_from "databridge_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
